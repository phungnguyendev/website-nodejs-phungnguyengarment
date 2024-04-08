import { randomUUID } from 'crypto'
import fs from 'fs'
import appConfig from '~/config/app.config'
import { driveService, oauth2Client } from '~/config/googleapis.config'

export const googleDriveUploadTo = async (file: Express.Multer.File): Promise<any> => {
  try {
    const fileMetadata = {
      name: `${randomUUID()}`,
      parents: [String(appConfig.googleapis.parentFolder)] // Change it according to your desired parent folder id
    }

    const media = {
      mimeType: file.mimetype,
      body: fs.createReadStream(file.path)
    }

    const auth = oauth2Client()

    const response = await driveService(auth).files.create({
      requestBody: fileMetadata,
      media: media
    })

    return response
  } catch (error: any) {
    console.error(`${error.message}`)
  }
}

export const googleDriveDeleteFile = async (fileId: string): Promise<any> => {
  try {
    const auth = oauth2Client()

    const response = await driveService(auth).files.delete({
      fileId
    })

    return response
  } catch (error: any) {
    console.error(`${error.message}`)
  }
}

export const googleDriveGeneratePublicUrl = async (fileId: string): Promise<any> => {
  try {
    const auth = oauth2Client()

    const drive = driveService(auth)

    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone'
      }
    })

    const response = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink'
    })

    return response.data
  } catch (error: any) {
    console.error(`${error.message}`)
  }
}
