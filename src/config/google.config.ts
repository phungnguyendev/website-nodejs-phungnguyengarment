import { google } from 'googleapis'
import appConfig from './app.config'

export const oauth2Client = new google.auth.OAuth2({
  clientId: appConfig.google.clientID,
  clientSecret: appConfig.google.clientSecret,
  redirectUri: appConfig.google.redirectUrl
})

export const driveService = google.drive({
  version: 'v3',
  auth: oauth2Client
})
