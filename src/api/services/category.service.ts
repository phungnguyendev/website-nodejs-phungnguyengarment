import { buildDynamicQuery } from '~/helpers/query'
import CategorySchema, { Category } from '~/models/category.model'
import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'

const NAMESPACE = 'services/category'

export const createNewItem = async (item: Category) => {
  try {
    const created = await CategorySchema.create(item)
    return created
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Get by id
export const getItemByPk = async (id: number) => {
  try {
    const itemFound = await CategorySchema.findByPk(id)
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
    const items = await CategorySchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<Category>(body)
    })
    return items
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItemByPk = async (id: number, itemToUpdate: Category) => {
  try {
    const itemFound = await CategorySchema.findByPk(id)
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.update(itemToUpdate)
    return itemToUpdate
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItems = async (itemsToUpdate: Category[]) => {
  try {
    await Promise.all(
      itemsToUpdate.map((item) => {
        CategorySchema.update(
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
    const items = await CategorySchema.findAll()
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
    const itemFound = await CategorySchema.findByPk(id)
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.destroy()
    return { message: 'Deleted successfully' }
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}
