import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import { buildDynamicQuery } from '../helpers/query'
import HomeProductSchema, { HomeProduct } from '../models/home-product.model'

const NAMESPACE = 'services/home-product'

export const createNewItem = async (item: HomeProduct): Promise<HomeProductSchema> => {
  try {
    return await HomeProductSchema.create(item)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Get by id
export const getItemByPk = async (id: number): Promise<HomeProductSchema | null> => {
  try {
    return await HomeProductSchema.findByPk(id)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemBy = async (item: HomeProduct): Promise<HomeProductSchema | null> => {
  try {
    return await HomeProductSchema.findOne({ where: { ...item } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemsCount = async (): Promise<number> => {
  try {
    return await HomeProductSchema.count()
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw new Error(`${error}`)
  }
}

// Get all
export const getItems = async (body: RequestBodyType): Promise<{ count: number; rows: HomeProductSchema[] }> => {
  try {
    const items = await HomeProductSchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<HomeProduct>(body)
    })
    return items
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const updateList = async (itemsUpdate: HomeProduct[]): Promise<HomeProduct[] | undefined> => {
  try {
    itemsUpdate.forEach(async (item) => {
      await HomeProductSchema.update({ ...item }, { where: { id: item.id } })
        .then((affectedCount) => {
          if (!(affectedCount[0] > 0)) throw new Error(`Update failed`)
        })
        .catch((e) => {
          throw new Error(`${e}`)
        })
    })
    // const updatedRows = itemsUpdate.map(async (item) => {
    //   await HomeProductSchema.update({ ...item }, { where: { id: item.id } })
    // })
    // console.log(updatedRows)
    return itemsUpdate
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Update by productID
export const updateItemByPk = async (id: number, itemToUpdate: HomeProduct): Promise<HomeProduct | undefined> => {
  try {
    const affectedRows = await HomeProductSchema.update(
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
    return await HomeProductSchema.destroy({ where: { id: id } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}
