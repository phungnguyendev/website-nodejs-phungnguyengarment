import { buildDynamicQuery } from '~/helpers/query'
import ProjectSchema, { Project } from '~/models/project.model'
import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'

const NAMESPACE = 'services/project'

export const createNewItem = async (item: Project) => {
  try {
    return await ProjectSchema.create(item)
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Get by id
export const getItemByPk = async (id: number) => {
  try {
    const itemFound = await ProjectSchema.findByPk(id)
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
    const items = await ProjectSchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<Project>(body)
    })
    return items
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItemByPk = async (id: number, itemToUpdate: Project) => {
  try {
    const itemFound = await ProjectSchema.findByPk(id)
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.update(itemToUpdate)
    return itemToUpdate
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItems = async (itemsToUpdate: Project[]) => {
  try {
    await Promise.all(
      itemsToUpdate.map((item) => {
        ProjectSchema.update(
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
    const items = await ProjectSchema.findAll()
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
    const itemFound = await ProjectSchema.findByPk(id)
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.destroy()
    return { message: 'Deleted successfully' }
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}
