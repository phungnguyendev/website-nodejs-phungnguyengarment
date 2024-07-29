import { Request, Response } from 'express'
import * as service from '~/api/services/post.service'
import { Post } from '~/models/post.model'
import { RequestBodyType } from '~/type'
import { message } from '~/utils/constant'

export const createNewItem = async (req: Request, res: Response) => {
  try {
    const dataRequest: Post = {
      ...req.body
    }
    const newItem = await service.createNewItem(dataRequest)
    return res.formatter.created({ data: newItem })
  } catch (error: any) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getItemByPk = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const itemFound = await service.getItemByPk(id)
    return res.formatter.ok({ data: itemFound, message: message.SUCCESS })
  } catch (error: any) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const getItems = async (req: Request, res: Response) => {
  try {
    const bodyRequest: RequestBodyType = {
      ...req.body
    }
    const countAll = await service.getItems({
      ...bodyRequest,
      filter: { status: 'active', field: 'id', items: [-1] }
    })
    const items = await service.getItems(bodyRequest)
    return res.formatter.ok({
      data: items.rows,
      length: items.count,
      page: Number(bodyRequest.paginator.page),
      pageSize: Number(bodyRequest.paginator.pageSize),
      total: bodyRequest.search.term.length > 0 ? items.count : countAll.count
    })
  } catch (error: any) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const updateItemByPk = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const itemRequest: Post = {
      ...req.body
    }
    const itemUpdated = await service.updateItemByPk(id, itemRequest)
    return res.formatter.ok({ data: itemUpdated, message: message.UPDATED })
  } catch (error: any) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const deleteItemByPk = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const destroyed = await service.deleteItemByPk(id)
    return res.formatter.ok({ message: destroyed.message })
  } catch (error: any) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}
