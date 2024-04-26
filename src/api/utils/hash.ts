import jwt, { SignOptions } from 'jsonwebtoken'
import appConfig from '~/config/app.config'

export const hashValue = (payload: string | object | Buffer, options?: SignOptions): string => {
  const hashed = jwt.sign(payload, appConfig.secret_key, { ...options, expiresIn: '3d' })
  return hashed
}

export const verifyValue = (token: string): string | object | Buffer => {
  return jwt.verify(token, appConfig.secret_key)
}
