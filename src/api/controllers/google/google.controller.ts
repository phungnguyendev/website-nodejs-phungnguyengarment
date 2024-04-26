import { Request, Response } from 'express'
import * as service from '~/api/services/google/google.service'
import { message } from '~/api/utils/constant'
import { deleteFile } from '~/config/multer.config'

export const googleDriveUploadFile = async (req: Request, res: Response) => {
  try {
    const file = req.file
    if (!file) return res.formatter.serverError({ message: 'Internal error!' })
    const upload = await service.googleDriveUploadTo(file)
    deleteFile(file.path)
    return res.formatter.created({ data: upload.data, message: message.CREATED })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const googleDriveGeneratePublicUrl = async (req: Request, res: Response) => {
  try {
    const fileId = req.params.fileId
    if (!fileId) return res.formatter.serverError({ message: 'Internal error!' })
    const generate = await service.googleDriveGeneratePublicUrl(fileId)
    return res.formatter.ok({ data: generate, message: message.SUCCESS })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const googleDriveDeleteFile = async (req: Request, res: Response) => {
  try {
    const fileId = req.params.fileId
    if (!fileId) return res.formatter.serverError({ message: 'Internal error!' })
    const response = await service.googleDriveDeleteFile(fileId)
    if (response) {
      return res.formatter.ok({ message: message.DELETED })
    } else {
      return res.formatter.notFound({ message: message.NOT_FOUND })
    }
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}
