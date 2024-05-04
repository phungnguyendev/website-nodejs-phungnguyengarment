import 'dotenv/config'

const appConfig = {
  app_name: process.env.APP_NAME ?? '',
  company_name: process.env.COMPANY_NAME ?? '',
  secret_key: process.env.SECRET_KEY ?? '',
  clientURL: process.env.CLIENT_URL ?? '',
  server: {
    host: process.env.HOST ?? '',
    port: process.env.PORT ?? 8001
  },
  database: {
    db_host: process.env.DB_HOST ?? '',
    db_port: process.env.DB_PORT ?? '',
    username: process.env.DB_USERNAME ?? '',
    password: process.env.DB_PASSWORD ?? '',
    db_name: process.env.DB_NAME ?? ''
  },
  nodemailer: {
    admin_user: process.env.MAIL_ADMIN ?? '',
    admin_password: process.env.MAIL_PASSWORD ?? '', // App password in gmail
    admin_password_original: process.env.MAIL_PASSWORD_ORIGINAL ?? '',
    admin_avatar: process.env.MAIL_ADMIN_AVATAR ?? ''
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    redirectUrl: process.env.GOOGLE_REDIRECT_URL ?? '',
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN ?? '',
    parentFolder: process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID ?? ''
  }
}

export default appConfig
