import { Router } from 'express'
import { validationRules } from '~/api/middleware/request-validator'
import AuthController from '~/controllers/auth/auth.controller'

class AuthRoute {
  router = Router()
  controller = new AuthController()

  constructor() {
    this.initialize()
  }

  private initialize() {
    // Login chanel
    this.router.post(
      '/login',
      validationRules([
        { field: 'email', fieldType: 'string', location: 'body' },
        { field: 'password', fieldType: 'string', location: 'body' }
      ]),
      this.controller.login
    )

    this.router.post(
      '/refresh',
      validationRules([
        { field: 'email', fieldType: 'string', location: 'body' },
        { field: 'password', fieldType: 'string', location: 'body' }
      ]),
      this.controller.login
    )

    this.router.post(
      '/send-email/:email',
      validationRules([{ field: 'email', fieldType: 'string', location: 'params' }]),
      this.controller.sendEmailOTPCode
    )

    this.router.post(
      '/verify-otp/:email',
      validationRules([
        { field: 'email', fieldType: 'string', location: 'params' },
        { field: 'otp', fieldType: 'string', location: 'body' }
      ]),
      this.controller.verifyOTP
    )
  }
}

export default new AuthRoute().router
