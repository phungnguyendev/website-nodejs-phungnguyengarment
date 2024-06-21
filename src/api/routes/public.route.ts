import express, { Router } from 'express'
import multer from '~/config/multer.config'
import * as controller from '~/controllers/public.controller'

const router = Router()

router.use('/images/preview', express.static('public/images'))
router.use('/videos/preview', express.static('public/videos'))
router.use('/icons/preview', express.static('public/icons'))
router.use('/files/preview', express.static('public/files'))

router.post('/upload/images', multer('images').array('images', 10), controller.uploadImages)
router.post('/upload/videos', multer('videos').array('videos', 10), controller.uploadVideos)
router.post('/upload/icons', multer('icons').array('icons', 10), controller.uploadIcons)
router.post('/upload/files', multer('files').array('files', 10), controller.uploadFiles)

// Get item by productID and importedID
router.get('/images/:fileName', controller.getImage)
router.get('/videos/:fileName', controller.getVideo)
router.get('/icons/:fileName', controller.getIcon)
router.get('/files/:fileName', controller.getFile)

// Get all items
router.get('/images', controller.getImages)
router.get('/videos', controller.getVideos)
router.get('/icons', controller.getIcons)
router.get('/files', controller.getFiles)

// Delete item by productID
router.delete('/images/:fileName', controller.deleteImage)
router.delete('/videos/:fileName', controller.deleteVideo)
router.delete('/icons/:fileName', controller.deleteIcon)
router.delete('/files/:fileName', controller.deleteFile)

export default router
