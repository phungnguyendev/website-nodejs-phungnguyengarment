import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import { buildDynamicQuery } from '../helpers/query'
import ProjectSchema, { Project } from '../models/project.model'

const NAMESPACE = 'services/project'

export const createNewItem = async (item: Project): Promise<ProjectSchema> => {
  try {
    return await ProjectSchema.create(item)
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Get by id
export const getItemByPk = async (id: number): Promise<ProjectSchema | null> => {
  try {
    return await ProjectSchema.findByPk(id)
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

export const getItemBy = async (item: Project): Promise<ProjectSchema | null> => {
  try {
    return await ProjectSchema.findOne({ where: { ...item } })
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

export const getItemsCount = async (): Promise<number> => {
  try {
    return await ProjectSchema.count()
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw new Error(`${error}`)
  }
}

// Get all
export const getItems = async (body: RequestBodyType): Promise<{ count: number; rows: ProjectSchema[] }> => {
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

export const updateList = async (itemsUpdate: Project[]): Promise<Project[] | undefined> => {
  try {
    itemsUpdate.forEach(async (item) => {
      await ProjectSchema.update({ ...item }, { where: { id: item.id } })
        .then((affectedCount) => {
          if (!(affectedCount[0] > 0)) throw new Error(`Update failed`)
        })
        .catch((e) => {
          throw new Error(`${e}`)
        })
    })
    return itemsUpdate
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItemByPk = async (id: number, itemToUpdate: Project): Promise<Project | undefined> => {
  try {
    const affectedRows = await ProjectSchema.update(
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
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Delete importedID
export const deleteItemByPk = async (id: number): Promise<number> => {
  try {
    return await ProjectSchema.destroy({ where: { id: id } })
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}
