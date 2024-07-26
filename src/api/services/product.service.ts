import { buildDynamicQuery } from '~/helpers/query'
import ProductSchema, { Product } from '~/models/product.model'
import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import CategorySchema from '../models/category.model'

const NAMESPACE = 'services/product'

export const createNewItem = async (item: Product) => {
  try {
    const createdItem = await ProductSchema.create(item)
    const itemNew = await ProductSchema.findByPk(createdItem.id, {
      include: [{ model: CategorySchema, as: 'category' }]
    })
    return itemNew
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Get by id
export const getItemByPk = async (id: number) => {
  try {
    const itemFound = await ProductSchema.findByPk(id, { include: [{ model: CategorySchema, as: 'category' }] })
    if (!itemFound) throw new Error(`Item not found`)
    return itemFound
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Get all
export const getItems = async (body: RequestBodyType) => {
  try {
    const items = await ProductSchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<Product>(body),
      include: [{ model: CategorySchema, as: 'category' }]
    })
    return items
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItemByPk = async (id: number, itemToUpdate: Product) => {
  try {
    const itemFound = await ProductSchema.findByPk(id)
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.update(itemToUpdate)
    const itemNew = await ProductSchema.findByPk(id, {
      include: [{ model: CategorySchema, as: 'category' }]
    })
    return itemNew
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItems = async (itemsToUpdate: Product[]) => {
  try {
    await Promise.all(
      itemsToUpdate.map((item) => {
        ProductSchema.update(
          { ...item },
          {
            where: {
              id: item.id
            }
          }
        )
      })
    )
    // Lấy lại ds đã thay đổi
    const items = await ProductSchema.findAll({ include: [{ model: CategorySchema, as: 'category' }] })
    return items.map((item) => {
      const itemUpdate = itemsToUpdate.find((self) => self.id === item.id)
      return { ...item.dataValues, ...itemUpdate }
    })
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Delete importedID
export const deleteItemByPk = async (id: number) => {
  try {
    const itemFound = await ProductSchema.findByPk(id)
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.destroy()
    return { message: 'Deleted successfully' }
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}
