import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import { buildDynamicQuery } from '../helpers/query'
import ProductCategorySchema, { ProductCategory } from '../models/product-category.model'

const NAMESPACE = 'services/product-category'

export const createNewItem = async (item: ProductCategory): Promise<ProductCategorySchema> => {
  try {
    return await ProductCategorySchema.create({ ...item })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Get by id
export const getItemByPk = async (id: number): Promise<ProductCategorySchema | null> => {
  try {
    return await ProductCategorySchema.findByPk(id)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemBy = async (item: ProductCategory): Promise<ProductCategorySchema | null> => {
  try {
    return await ProductCategorySchema.findOne({ where: { ...item } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemsCount = async (): Promise<number> => {
  try {
    return await ProductCategorySchema.count()
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw new Error(`${error}`)
  }
}

// Get all
export const getItems = async (body: RequestBodyType): Promise<{ count: number; rows: ProductCategorySchema[] }> => {
  try {
    const items = await ProductCategorySchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<ProductCategory>(body)
    })
    return items
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Update by productID
export const updateItemByPk = async (
  id: number,
  itemToUpdate: ProductCategory
): Promise<ProductCategory | undefined> => {
  try {
    const affectedRows = await ProductCategorySchema.update(
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
    return await ProductCategorySchema.destroy({ where: { id: id } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}
