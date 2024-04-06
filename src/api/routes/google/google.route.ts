import { Router } from 'express'
import multer from '~/config/multer.config'
import GoogleController from '~/controllers/google/google.controller'

class GoogleRoute {
  router = Router()
  controller = new GoogleController()

  constructor() {
    this.initialize()
  }

  private initialize() {
    // UPLOAD File to GoogleDrive
    this.router.post('/drive/upload', multer.single('file'), this.controller.googleDriveUploadFile)

    // GENERATE public url with id
    this.router.post('/drive/generateUrl/:fileId', this.controller.googleDriveGeneratePublicUrl)

    // DELETE File with id
    this.router.delete('/drive/:fileId', this.controller.googleDriveDeleteFile)
  }
}

export default new GoogleRoute().router
