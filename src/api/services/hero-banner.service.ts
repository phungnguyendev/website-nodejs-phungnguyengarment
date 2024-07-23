import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import { buildDynamicQuery } from '../helpers/query'
import HeroBannerSchema, { HeroBanner } from '../models/hero-banner.model'

const NAMESPACE = 'services/hero-banner'

export const createNewItem = async (item: HeroBanner) => {
  try {
    return await HeroBannerSchema.create(item)
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Get by id
export const getItemByPk = async (id: number) => {
  try {
    const itemFound = await HeroBannerSchema.findByPk(id)
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
    const items = await HeroBannerSchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<HeroBanner>(body)
    })
    return items
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItemByPk = async (id: number, itemToUpdate: HeroBanner) => {
  try {
    const itemFound = await HeroBannerSchema.findByPk(id)
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.update(itemToUpdate)
    return itemToUpdate
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItems = async (itemsToUpdate: HeroBanner[]) => {
  try {
    await Promise.all(
      itemsToUpdate.map((item) => {
        HeroBannerSchema.update(
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
    const items = await HeroBannerSchema.findAll()
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
    const itemFound = await HeroBannerSchema.findByPk(id)
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.destroy()
    return { message: 'Deleted successfully' }
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}
