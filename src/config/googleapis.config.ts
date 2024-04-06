import { BaseExternalAccountClient, GoogleAuth, OAuth2Client } from 'google-auth-library'
import { drive_v3, google } from 'googleapis'
import appConfig from './app.config'

export const oauth2Client = (): OAuth2Client => {
  const oauth2Client = new google.auth.OAuth2({
    clientId: appConfig.googleapis.clientID,
    clientSecret: appConfig.googleapis.clientSecret,
    redirectUri: appConfig.googleapis.redirectUrl
  })
  oauth2Client.setCredentials({ refresh_token: appConfig.googleapis.refreshToken })
  return oauth2Client
}

export const driveService = (auth: GoogleAuth | OAuth2Client | BaseExternalAccountClient | string): drive_v3.Drive => {
  return google.drive({
    version: 'v3',
    auth: auth
  })
}
