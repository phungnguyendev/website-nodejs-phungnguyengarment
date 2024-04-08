import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import { buildDynamicQuery } from '../helpers/query'
import CategorySchema, { Category } from '../models/category.model'

const NAMESPACE = 'services/category'

export const createNewItem = async (item: Category): Promise<CategorySchema> => {
  try {
    return await CategorySchema.create(item)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Get by id
export const getItemByPk = async (id: number): Promise<CategorySchema | null> => {
  try {
    return await CategorySchema.findByPk(id)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemBy = async (item: Category): Promise<CategorySchema | null> => {
  try {
    return await CategorySchema.findOne({ where: { ...item } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemsCount = async (): Promise<number> => {
  try {
    return await CategorySchema.count()
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw new Error(`${error}`)
  }
}

// Get all
export const getItems = async (body: RequestBodyType): Promise<{ count: number; rows: CategorySchema[] }> => {
  try {
    const items = await CategorySchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<Category>(body)
    })
    return items
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const updateList = async (itemsUpdate: Category[]): Promise<Category[] | undefined> => {
  try {
    itemsUpdate.forEach(async (item) => {
      await CategorySchema.update({ ...item }, { where: { id: item.id } })
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
export const updateItemByPk = async (id: number, itemToUpdate: Category): Promise<Category | undefined> => {
  try {
    const affectedRows = await CategorySchema.update(
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
    return await CategorySchema.destroy({ where: { id: id } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}
