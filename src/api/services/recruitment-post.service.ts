import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import { buildDynamicQuery } from '../helpers/query'
import RecruitmentPostSchema, { RecruitmentPost } from '../models/recruitment-post.model'

const NAMESPACE = 'services/recruitment-post'

export const createNewItem = async (item: RecruitmentPost): Promise<RecruitmentPostSchema> => {
  try {
    return await RecruitmentPostSchema.create(item)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Get by id
export const getItemByPk = async (id: number): Promise<RecruitmentPostSchema | null> => {
  try {
    return await RecruitmentPostSchema.findByPk(id)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemBy = async (item: RecruitmentPost): Promise<RecruitmentPostSchema | null> => {
  try {
    return await RecruitmentPostSchema.findOne({ where: { ...item } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemsCount = async (): Promise<number> => {
  try {
    return await RecruitmentPostSchema.count()
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw new Error(`${error}`)
  }
}

export const getItemsWithStatus = async (): Promise<RecruitmentPostSchema[]> => {
  try {
    return await RecruitmentPostSchema.findAll()
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw new Error(`${error}`)
  }
}

// Get all
export const getItems = async (body: RequestBodyType): Promise<{ count: number; rows: RecruitmentPostSchema[] }> => {
  try {
    const items = await RecruitmentPostSchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<RecruitmentPost>(body)
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
  itemToUpdate: RecruitmentPost
): Promise<RecruitmentPost | undefined> => {
  try {
    const affectedRows = await RecruitmentPostSchema.update(
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
    return await RecruitmentPostSchema.destroy({ where: { id: id } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}
