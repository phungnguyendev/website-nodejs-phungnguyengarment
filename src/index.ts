import compression from 'compression'
import cors, { CorsOptions } from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import * as userService from '~/api/services/user.service'
import { responseEnhancer } from '~/middleware/express-formatter/index'
import { sequelizeInstance } from './api/models'
import UserSchema from './api/models/user.model'
import AppRoutes from './api/routes'
import appConfig from './config/app.config'

export default class App {
  constructor() {}

  public initialize(app: Application) {
    this.config(app)
    this.syncDatabase()
    // New app routes
    new AppRoutes(app)
    this.createAdminIfNotExist()
  }

  private config(app: Application) {
    const corsOptions: CorsOptions = {
      origin: ['http://localhost:5173']
    }
    // Accept json body request
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    // (helmet) helps secure Express apps by setting HTTP response headers.
    app.use(morgan('dev'))
    app.use(helmet())
    app.use(compression())
    app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
    // (morgan) HTTP request logger middleware for node.js
    // (cors) Provide some options Headers for accept others localhost to allow request
    app.use(cors(corsOptions))
    // Handle custom formatter response express (middleware)
    app.use(responseEnhancer())
  }

  private syncDatabase() {
    sequelizeInstance?.sync()
  }

  private async createAdminIfNotExist() {
    const count = await UserSchema.count()
    if (count <= 0) {
      await userService.createNewItem({
        email: appConfig.nodemailer.admin_user,
        password: appConfig.nodemailer.admin_password_original,
        avatar: appConfig.nodemailer.admin_avatar
      })
    }
  }
}

const app: Application = express()
const appServer: App = new App()

appServer.initialize(app)

app
  .listen(Number(appConfig.server.server_port), appConfig.server.server_host, function () {
    console.log(`Server is running on port: ${appConfig.server.server_port} :: ${appConfig.server.server_url}`)
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('Error: address already in use')
    } else {
      console.log(err)
    }
  })
