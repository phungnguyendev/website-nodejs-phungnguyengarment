import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import { buildDynamicQuery } from '../helpers/query'
import ProductSchema, { Product } from '../models/product.model'

const NAMESPACE = 'services/product'

export const createNewItem = async (item: Product): Promise<ProductSchema> => {
  try {
    return await ProductSchema.create(item)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Get by id
export const getItemByPk = async (id: number): Promise<ProductSchema | null> => {
  try {
    return await ProductSchema.findByPk(id)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemBy = async (item: Product): Promise<ProductSchema | null> => {
  try {
    return await ProductSchema.findOne({ where: { ...item } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemsCount = async (): Promise<number> => {
  try {
    return await ProductSchema.count()
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw new Error(`${error}`)
  }
}

// Get all
export const getItems = async (body: RequestBodyType): Promise<{ count: number; rows: ProductSchema[] }> => {
  try {
    const items = await ProductSchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<Product>(body)
    })
    return items
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const updateList = async (itemsUpdate: Product[]): Promise<Product[] | undefined> => {
  try {
    itemsUpdate.forEach(async (item) => {
      await ProductSchema.update({ ...item }, { where: { id: item.id } })
        .then((affectedCount) => {
          if (!(affectedCount[0] > 0)) throw new Error(`Update failed`)
        })
        .catch((e) => {
          throw new Error(`${e}`)
        })
    })
    return itemsUpdate
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Update by productID
export const updateItemByPk = async (id: number, itemToUpdate: Product): Promise<Product | undefined> => {
  try {
    const affectedRows = await ProductSchema.update(
      {
        ...itemToUpdate
      },
      {
        where: {
          id: id
        }
      }
    )
    return affectedRows[0] > 0 ? itemToUpdate : undefined
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Delete importedID
export const deleteItemByPk = async (id: number): Promise<number> => {
  try {
    return await ProductSchema.destroy({ where: { id: id } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}
