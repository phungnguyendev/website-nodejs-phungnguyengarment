import app from './app'
import appConfig from './config/app.config'

// Start server
const server = app
  .listen(appConfig.server.server_port || 8001, () => {
    console.log(`WSV eCommerce start with port ${appConfig.server.server_port}`)
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('Error: address already in use')
    } else {
      console.log(err)
    }
  })

// Phương thức quy trình trong nodejs
process.on('SIGINT', () => {
  server.close(() => console.log(`Exit server express`))
})
