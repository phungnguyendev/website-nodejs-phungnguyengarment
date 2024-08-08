import { buildDynamicQuery } from '~/helpers/query'
import RecruitmentPostSchema, { RecruitmentPost } from '~/models/recruitment-post.model'
import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import JobSectorSchema from '../models/job-sector.model'

const NAMESPACE = 'services/recruitment-post'

export const createNewItem = async (item: RecruitmentPost) => {
  try {
    const created = await RecruitmentPostSchema.create(item)
    const newItem = await RecruitmentPostSchema.findByPk(created.id, {
      include: [{ model: JobSectorSchema, as: 'jobSector' }]
    })
    return newItem
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Get by id
export const getItemByPk = async (id: number) => {
  try {
    const itemFound = await RecruitmentPostSchema.findByPk(id, {
      include: [{ model: JobSectorSchema, as: 'jobSector' }]
    })
    if (!itemFound) throw new Error(`Item not found`)
    return itemFound
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Get by id
export const getItemByRouteTitle = async (routeTitle: string) => {
  try {
    const itemFound = await RecruitmentPostSchema.findOne({
      where: { routeTitle: routeTitle },
      include: [{ model: JobSectorSchema, as: 'jobSector' }]
    })
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
    const items = await RecruitmentPostSchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<RecruitmentPost>(body),
      include: [{ model: JobSectorSchema, as: 'jobSector' }]
    })
    return items
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Update by productID
export const updateItemByPk = async (id: number, itemToUpdate: RecruitmentPost) => {
  try {
    const itemFound = await RecruitmentPostSchema.findByPk(id, {
      include: [{ model: JobSectorSchema, as: 'jobSector' }]
    })
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.update(itemToUpdate)
    return itemToUpdate
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}

// Delete importedID
export const deleteItemByPk = async (id: number) => {
  try {
    const itemFound = await RecruitmentPostSchema.findByPk(id)
    if (!itemFound) throw new Error(`Item not found`)
    await itemFound.destroy()
    return { message: 'Deleted successfully' }
  } catch (error: any) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error.message}`
  }
}
