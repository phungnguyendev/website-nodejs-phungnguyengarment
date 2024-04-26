import { Request, Response } from 'express'
import * as service from '~/api/services/product-category.service'
import { Category } from '~/models/category.model'
import { ProductCategory } from '~/models/product-category.model'
import { Product } from '~/models/product.model'
import { RequestBodyType } from '~/type'
import { message } from '~/utils/constant'

export const createNewItem = async (req: Request, res: Response) => {
  try {
    const itemRequest: ProductCategory = {
      ...req.body
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

export const updateItemByPk = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const itemRequest: ProductCategory = {
      ...req.body
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

export const updateItemByCategoryID = async (req: Request, res: Response) => {
  try {
    const categoryID = Number(req.params.categoryID)
    const productToUpdate: Product = req.body
    const itemUpdated = await service.updateItemBy({ field: 'categoryID', id: categoryID }, { ...productToUpdate })
    if (itemUpdated) {
      return res.formatter.ok({ data: itemUpdated, message: message.UPDATED })
    }
    return res.formatter.badRequest({ message: message.UPDATE_FAILED })
  } catch (error) {
    return res.formatter.badRequest({ message: `${error}` })
  }
}

export const updateItemByProductID = async (req: Request, res: Response) => {
  try {
    const productID = Number(req.params.productID)
    const categoryToUpdate: Category = req.body
    const itemUpdated = await service.updateItemBy({ field: 'productID', id: productID }, { ...categoryToUpdate })
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
