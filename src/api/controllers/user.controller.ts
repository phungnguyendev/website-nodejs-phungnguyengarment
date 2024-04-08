import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import appConfig from '~/config/app.config'
import { mailOptionToSendUserInfo, transporter } from '~/config/nodemailer.config'
import { User } from '~/models/user.model'
import * as service from '~/services/user.service'
import { RequestBodyType } from '~/type'
import { message } from '../utils/constant'

const PATH = 'controllers/user'
const NAMESPACE = 'User'

export default class UserController {
  constructor() {}

  createNewItem = async (req: Request, res: Response) => {
    const itemRequest: User = {
      ...req.body
    }
    try {
      const userNew = await service.createNewItem({ ...itemRequest })
      if (userNew) {
        transporter.verify(async (err, success) => {
          if (err) throw new Error(`${err}`)
          await transporter.sendMail(mailOptionToSendUserInfo(userNew.email, userNew)).catch((err) => {
            throw new Error(`${err}`)
          })
        })
        return res.formatter.ok({
          data: userNew,
          message: `We have sent an authentication otp code to your email address, please check your email!`
        })
      }
      return res.formatter.badRequest({ message: message.CREATION_FAILED })
    } catch (error) {
      return res.formatter.badRequest({ message: `${error}` })
    }
  }

  userFromAccessToken = async (req: Request, res: Response) => {
    try {
      const accessTokenFromHeaders = String(req.params.accessToken)

      if (!accessTokenFromHeaders) return res.formatter.notFound({ message: 'Access token is not found!' })
      const userFromAccessToken = await service.getItemBy({ accessToken: accessTokenFromHeaders })
      if (!userFromAccessToken) return res.formatter.notFound({ message: 'Can not found user from access token!' })
      const jwtVerified = <any>jwt.verify(userFromAccessToken.accessToken, appConfig.secret_key)
      if (!jwtVerified) res.formatter.unauthorized({ message: 'Can not verify access token, please login again!' })
      const { email, password } = jwtVerified
      const userFound = await service.getItemBy({ email, password })
      if (!userFound) return res.formatter.notFound({ message: `Can not find user on database with email: ${email}` })
      return res.formatter.ok({ data: userFromAccessToken })
    } catch (error) {
      return res.formatter.badRequest({ message: `${error}` })
    }
  }

  getUserByPk = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    try {
      const item = await service.getItemByPk(id)
      if (item) {
        return res.formatter.ok({ data: item, message: message.SUCCESS })
      }
      return res.formatter.notFound({ message: message.NOT_FOUND })
    } catch (error) {
      return res.formatter.badRequest({ message: `${error}` })
    }
  }

  getItemByEmail = async (req: Request, res: Response) => {
    const email = String(req.params.email)
    try {
      const item = await service.getItemBy({ email: email })
      if (item) {
        return res.formatter.ok({ data: item, message: message.SUCCESS })
      }
      return res.formatter.notFound({ message: message.NOT_FOUND })
    } catch (error) {
      return res.formatter.badRequest({ message: `${error}` })
    }
  }

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const bodyRequest: RequestBodyType = {
        ...req.body
      }
      const items = await service.getItems(bodyRequest)
      return res.formatter.ok({
        data: items.rows,
        length: items.rows.length,
        page: Number(bodyRequest.paginator.page),
        pageSize: Number(bodyRequest.paginator.pageSize),
        total: items.count,
        message: message.SUCCESS
      })
    } catch (error) {
      return res.formatter.badRequest({ message: `${error}` })
    }
  }

  updateUserByEmail = async (req: Request, res: Response) => {
    const email = req.params.email
    const itemRequest: User = {
      ...req.body
    }
    try {
      const itemUpdated = await service.updateItemByEmail(email, itemRequest)
      if (itemUpdated) {
        return res.formatter.ok({ data: itemUpdated, message: message.UPDATED })
      }
      return res.formatter.badRequest({ message: message.UPDATE_FAILED })
    } catch (error) {
      return res.formatter.badRequest({ message: `${error}` })
    }
  }

  updateUserByPk = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const itemRequest: User = {
      ...req.body
    }
    try {
      const itemUpdated = await service.updateItemByPk(id, itemRequest)
      if (itemUpdated) {
        return res.formatter.ok({ data: itemUpdated, message: message.UPDATED })
      }
      return res.formatter.badRequest({ message: message.UPDATE_FAILED })
    } catch (error) {
      return res.formatter.badRequest({ message: `${error}` })
    }
  }

  deleteItemByPk = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    try {
      const item = await service.deleteItemByPk(id)
      if (item) {
        return res.formatter.ok({ message: message.DELETED })
      }
      return res.formatter.badRequest({ message: message.DELETE_FAILED })
    } catch (error) {
      return res.formatter.badRequest({ message: `${error}` })
    }
  }
}
