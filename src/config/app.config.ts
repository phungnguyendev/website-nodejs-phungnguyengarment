import 'dotenv/config'

const appConfig = {
  app_name: process.env.APP_NAME ?? '',
  company_name: process.env.COMPANY_NAME ?? '',
  secret_key: process.env.SECRET_KEY ?? '',
  server: {
    server_host: process.env.SERVER_HOST ?? '',
    server_port: process.env.SERVER_PORT ?? 8001,
    server_url: process.env.SERVER_URL ?? ''
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
  googleapis: {
    clientID: process.env.CLIENT_ID ?? '',
    clientSecret: process.env.CLIENT_SECRET ?? '',
    redirectUrl: process.env.REDIRECT_URL ?? '',
    refreshToken: process.env.REFRESH_TOKEN ?? '',
    parentFolder: process.env.DRIVE_PARENT_FOLDER_ID ?? ''
  }
}

export default appConfig
