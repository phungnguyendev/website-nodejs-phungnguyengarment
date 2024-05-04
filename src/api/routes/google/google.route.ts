import { Router } from 'express'
import { upload } from '~/config/multer.config'
import * as controller from '~/controllers/google/google.controller'

const router = Router()

// router.post('/drive/upload', multer.single('file'), controller.googleDriveUploadFile)
router.post('/drive/upload', upload.single('file'), controller.googleDriveUploadFile)

// GENERATE public url with id
router.post('/drive/generateUrl/:fileId', controller.googleDriveGeneratePublicUrl)

// DELETE File with id
router.delete('/drive/:fileId', controller.googleDriveDeleteFile)

export default router
