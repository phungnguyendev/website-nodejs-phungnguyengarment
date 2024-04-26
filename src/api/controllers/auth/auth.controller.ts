import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { message } from '~/api/utils/constant'
import appConfig from '~/config/app.config'
import * as service from '~/services/user.service'

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const userExist = await service.getItemBy({ email: email })
    if (userExist && (await bcrypt.compare(password, userExist.hashPassword))) {
      // Generate access token | option: email
      return res.formatter.ok({
        data: {
          ...userExist.dataValues,
          accessToken: jwt.sign({ email: email }, appConfig.secret_key, { expiresIn: 60 })
        },
        message: message.LOGIN_SUCCESS
      })
    }
    return res.formatter.notFound({
      message: message.NOT_FOUND
    })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const userExist = await service.getItemBy({ email: email })
    if (userExist) {
      return res.formatter.badRequest({
        message: `User already exist!`
      })
    }
    // Create hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // Create new user
    const newUser = await service.createNewItem({ email: email, hashPassword: hashedPassword })
    if (newUser) {
      return res.formatter.ok({
        data: newUser,
        message: message.REGISTER_SUCCESS
      })
    }
    return res.formatter.badRequest({ message: `Invalid user data!` })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const logout = async (req: Request, res: Response) => {
  try {
    return res.formatter.ok({
      data: req,
      message: message.REGISTER_SUCCESS
    })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}
