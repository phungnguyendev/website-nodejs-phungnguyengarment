import Multer from 'multer'

const limit = 5 // 5 <=> 5MB

const multer = (destination: string) => {
  return Multer({
    storage: Multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, `public/${destination}`)
      },
      filename: function (req, file, callback) {
        // const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 19)
        // callback(null, uniqueSuffix + file.originalname)
        callback(null, file.originalname)
      }
    }),
    limits: {
      fileSize: limit * 1024 * 1024
    }
  })
}

export default multer
