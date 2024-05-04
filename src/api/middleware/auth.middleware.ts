import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import appConfig from '~/config/app.config'
import * as userService from '~/services/user.service'
import { UserRole } from '~/type'

export const checkRole = (roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const username = res.locals.jwtPayload.email
    //Get user role from the database
    try {
      const userFound = await userService.getItemBy({ email: username })
      if (!userFound) return res.formatter.notFound({ message: 'User not found!' })
    } catch (error) {
      return res.formatter.unauthorized({ message: `${error}` })
    }

    return next()
  }
}

export const verifyAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const accessToken = req.headers.authorization
  try {
    if (!accessToken) return res.formatter.unauthorized({})
    const email = jwt.verify(accessToken, appConfig.secret_key)
    if (!email) return res.formatter.notFound({})
    const emailExist = await userService.getItemBy({ email: `${email}` })
    if (emailExist) return res.formatter.notFound({ message: `Can not find user with email: ${email}` })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
  next()
}
