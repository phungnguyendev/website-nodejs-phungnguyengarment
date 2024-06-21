import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import appConfig from '~/config/app.config'
import { FileSyncType } from '~/type'

const imagesPath = 'public/images'
const videosPath = 'public/videos'
const iconsPath = 'public/icons'
const filesPath = 'public/files'

const previewURL = (fileName: string): string => {
  return `http://${appConfig.server.host}:${appConfig.server.port}/api/public/images/preview/${fileName}`
}

function getFilesSync(dir: string): FileSyncType[] | null {
  const files = fs.readdirSync(dir)
  return files.map((file) => {
    const filePath = path.join(dir, file)
    const stats = fs.statSync(filePath)
    return {
      fileName: file,
      preview: previewURL(file),
      fileType: path.extname(filePath),
      size: stats.size,
      createdDate: stats.birthtime,
      updatedDate: stats.mtime
    } as FileSyncType
  })
}

function getFileSync(dir: string, fileName: string): FileSyncType | null {
  const files = getFilesSync(dir)
  if (!files) return null
  const filesFiltered = files.filter((item) => item.fileName === fileName)
  return filesFiltered[0]
}

function deleteFileSync(pathToFile: string) {
  fs.unlinkSync(pathToFile)
}

export const uploadImages = async (req: Request, res: Response) => {
  try {
    const files = req.files
    if (!files) return res.formatter.badRequest({ message: `Upload failed!` })
    return res.formatter.ok({
      data: (files as Express.Multer.File[]).map((item) => {
        return {
          ...item,
          preview: previewURL(item.filename)
        }
      })
    })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const uploadVideos = async (req: Request, res: Response) => {
  try {
    const files = req.files
    if (!files) return res.formatter.badRequest({ message: `Upload failed!` })
    return res.formatter.ok({
      data: (files as Express.Multer.File[]).map((item) => {
        return {
          ...item,
          preview: previewURL(item.filename)
        }
      })
    })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const uploadIcons = async (req: Request, res: Response) => {
  try {
    const files = req.files
    if (!files) return res.formatter.badRequest({ message: `Upload failed!` })
    return res.formatter.ok({
      data: (files as Express.Multer.File[]).map((item) => {
        return {
          ...item,
          preview: previewURL(item.filename)
        }
      })
    })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const uploadFiles = async (req: Request, res: Response) => {
  try {
    const files = req.files
    if (!files) return res.formatter.badRequest({ message: `Upload failed!` })
    return res.formatter.ok({
      data: (files as Express.Multer.File[]).map((item) => {
        return {
          ...item,
          preview: previewURL(item.filename)
        }
      })
    })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getImage = async (req: Request, res: Response) => {
  try {
    const fileName = req.params.fileName
    const fileInfo = getFileSync(imagesPath, fileName)
    if (!fileInfo) return res.formatter.badRequest({ message: 'The folder is empty!' })
    return res.formatter.ok({ data: fileInfo })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getVideo = async (req: Request, res: Response) => {
  try {
    const fileName = req.params.fileName
    const fileInfo = getFileSync(videosPath, fileName)
    if (!fileInfo) return res.formatter.badRequest({ message: 'The folder is empty!' })
    return res.formatter.ok({ data: fileInfo })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getIcon = async (req: Request, res: Response) => {
  try {
    const fileName = req.params.fileName
    const fileInfo = getFileSync(iconsPath, fileName)
    if (!fileInfo) return res.formatter.badRequest({ message: 'The folder is empty!' })
    return res.formatter.ok({ data: fileInfo })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getFile = async (req: Request, res: Response) => {
  try {
    const fileName = req.params.fileName
    const fileInfo = getFileSync(filesPath, fileName)
    if (!fileInfo) return res.formatter.badRequest({ message: 'The folder is empty!' })
    return res.formatter.ok({ data: fileInfo })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getImages = async (req: Request, res: Response) => {
  try {
    const images = getFilesSync(imagesPath)
    if (!images) return res.formatter.badRequest({ message: 'Error to get images folder' })
    return res.formatter.ok({ data: images })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = getFilesSync(videosPath)
    if (!videos) return res.formatter.badRequest({ message: 'Error to get videos folder' })
    return res.formatter.ok({ data: videos })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getIcons = async (req: Request, res: Response) => {
  try {
    const icons = getFilesSync(iconsPath)
    if (!icons) return res.formatter.badRequest({ message: 'Error to get icons folder' })
    return res.formatter.ok({ data: icons })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}
export const getFiles = async (req: Request, res: Response) => {
  try {
    const files = getFilesSync(filesPath)
    if (!files) return res.formatter.badRequest({ message: 'Error to get files folder' })
    return res.formatter.ok({ data: files })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const deleteImage = async (req: Request, res: Response) => {
  try {
    const fileName = req.params.fileName
    deleteFileSync(`${imagesPath}/${fileName}`)
    return res.formatter.ok({ message: `${fileName} has been deleted!` })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}
export const deleteVideo = async (req: Request, res: Response) => {
  try {
    const fileName = req.params.fileName
    deleteFileSync(`${imagesPath}/${fileName}`)
    return res.formatter.ok({ message: `${fileName} has been deleted!` })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}
export const deleteIcon = async (req: Request, res: Response) => {
  try {
    const fileName = req.params.fileName
    deleteFileSync(`${imagesPath}/${fileName}`)
    return res.formatter.ok({ message: `${fileName} has been deleted!` })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}
export const deleteFile = async (req: Request, res: Response) => {
  try {
    const fileName = req.params.fileName
    deleteFileSync(`${imagesPath}/${fileName}`)
    return res.formatter.ok({ message: `${fileName} has been deleted!` })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}
