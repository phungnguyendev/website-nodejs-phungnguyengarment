import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import { buildDynamicQuery } from '../helpers/query'
import HeroBannerSchema, { HeroBanner } from '../models/hero-banner.model'

const NAMESPACE = 'services/hero-banner'

export const createNewItem = async (item: HeroBanner): Promise<HeroBannerSchema> => {
  try {
    return await HeroBannerSchema.create(item)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Get by id
export const getItemByPk = async (id: number): Promise<HeroBannerSchema | null> => {
  try {
    return await HeroBannerSchema.findByPk(id)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemBy = async (item: HeroBanner): Promise<HeroBannerSchema | null> => {
  try {
    return await HeroBannerSchema.findOne({ where: { ...item } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemsCount = async (): Promise<number> => {
  try {
    return await HeroBannerSchema.count()
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw new Error(`${error}`)
  }
}

// Get all
export const getItems = async (body: RequestBodyType): Promise<{ count: number; rows: HeroBannerSchema[] }> => {
  try {
    const items = await HeroBannerSchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<HeroBanner>(body)
    })
    return items
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const updateList = async (itemsUpdate: HeroBanner[]): Promise<HeroBanner[] | undefined> => {
  try {
    itemsUpdate.forEach(async (item) => {
      await HeroBannerSchema.update({ ...item }, { where: { id: item.id } })
        .then((affectedCount) => {
          if (!(affectedCount[0] > 0)) throw new Error(`Update failed`)
        })
        .catch((e) => {
          throw new Error(`${e}`)
        })
    })
    // const updatedRows = itemsUpdate.map(async (item) => {
    //   await HeroBannerSchema.update({ ...item }, { where: { id: item.id } })
    // })
    // console.log(updatedRows)
    return itemsUpdate
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Update by productID
export const updateItemByPk = async (id: number, itemToUpdate: HeroBanner): Promise<HeroBanner | undefined> => {
  try {
    const affectedRows = await HeroBannerSchema.update(
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
    return await HeroBannerSchema.destroy({ where: { id: id } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}
