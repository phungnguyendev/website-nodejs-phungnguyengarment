import fs from 'fs'
import Multer from 'multer'

const limit = 5 // 5 <=> 5MB

const multer = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `src/assets/`)
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname)
    }
  }),
  limits: {
    fileSize: limit * 1024 * 1024
  }
})

export const deleteFile = (filePath: string) => {
  fs.unlink(filePath, () => {
    console.log('file deleted')
  })
}

export default multer
