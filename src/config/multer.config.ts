import fs from 'fs'
import multer from 'multer'

const limit = 5 // 5 <=> 5MB

// const multer = Multer({
//   storage: Multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, `src/assets`)
//     },
//     filename: function (req, file, callback) {
//       callback(null, file.fieldname + '-' + Date.now())
//     }
//   }),
//   limits: {
//     fileSize: limit * 1024 * 1024
//   }
// })

export const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, `/assets`)
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now())
  }
})

export const deleteFile = (filePath: string) => {
  fs.unlink(filePath, () => {
    console.log('file deleted')
  })
}

export const upload = multer({ storage: storage })

export default multer
