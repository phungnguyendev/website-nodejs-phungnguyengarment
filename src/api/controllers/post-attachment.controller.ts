import { Request, Response } from 'express'
import * as service from '~/api/services/post-attachment.service'
import { PostAttachment } from '~/models/post-attachment.model'
import { RequestBodyType } from '~/type'
import { message } from '~/utils/constant'

export const createNewItem = async (req: Request, res: Response) => {
  try {
    const itemRequest: PostAttachment = {
      postID: req.body.postID,
      attachmentID: req.body.attachmentID
    }
    const itemNew = await service.createNewItem(itemRequest)
    if (itemNew) {
      return res.formatter.created({ data: itemNew, message: message.CREATED })
    }
    return res.formatter.badRequest({ message: message.CREATION_FAILED })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getItemByPk = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const item = await service.getItemByPk(id)
    if (item) {
      return res.formatter.ok({ data: item, message: message.SUCCESS })
    }
    return res.formatter.notFound({ message: message.NOT_FOUND })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getItems = async (req: Request, res: Response) => {
  try {
    const bodyRequest: RequestBodyType = {
      ...req.body
    }
    const items = await service.getItems(bodyRequest)
    return res.formatter.ok({
      data: items.rows,
      length: items.rows.length,
      page: Number(bodyRequest.paginator.page),
      pageSize: Number(bodyRequest.paginator.pageSize),
      total: items.count,
      message: message.SUCCESS
    })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const updateList = async (req: Request, res: Response) => {
  try {
    const itemRequest: PostAttachment[] = req.body
    // return res.formatter.ok({ data: itemRequest, message: message.UPDATED })
    const itemUpdated = await service.updateList(itemRequest)
    if (itemUpdated) {
      return res.formatter.ok({ data: itemUpdated, message: message.UPDATED })
    }
    return res.formatter.badRequest({ message: message.UPDATE_FAILED })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const updateItemByPk = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const itemRequest: PostAttachment = {
      postID: req.body.postID,
      attachmentID: req.body.attachmentID
    }
    const itemUpdated = await service.updateItemByPk(id, itemRequest)
    if (itemUpdated) {
      return res.formatter.ok({ data: itemUpdated, message: message.UPDATED })
    }
    return res.formatter.badRequest({ message: message.UPDATE_FAILED })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const deleteItemByPk = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const item = await service.deleteItemByPk(id)
    if (item) {
      return res.formatter.ok({ message: message.DELETED })
    }
    return res.formatter.notFound({ message: message.NOT_FOUND })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}
