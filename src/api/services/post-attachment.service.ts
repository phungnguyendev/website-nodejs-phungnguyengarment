import { RequestBodyType } from '~/type'
import logging from '~/utils/logging'
import { buildDynamicQuery } from '../helpers/query'
import PostAttachmentSchema, { PostAttachment } from '../models/post-attachment.model'

const NAMESPACE = 'services/post-attachment'

export const createNewItem = async (item: PostAttachment): Promise<PostAttachmentSchema> => {
  try {
    return await PostAttachmentSchema.create(item)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

// Get by id
export const getItemByPk = async (id: number): Promise<PostAttachmentSchema | null> => {
  try {
    return await PostAttachmentSchema.findByPk(id)
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemBy = async (item: PostAttachment): Promise<PostAttachmentSchema | null> => {
  try {
    return await PostAttachmentSchema.findOne({ where: { ...item } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const getItemsCount = async (): Promise<number> => {
  try {
    return await PostAttachmentSchema.count()
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw new Error(`${error}`)
  }
}

// Get all
export const getItems = async (body: RequestBodyType): Promise<{ count: number; rows: PostAttachmentSchema[] }> => {
  try {
    const items = await PostAttachmentSchema.findAndCountAll({
      offset: (Number(body.paginator.page) - 1) * Number(body.paginator.pageSize),
      limit: body.paginator.pageSize === -1 ? undefined : body.paginator.pageSize,
      order: [[body.sorting.column, body.sorting.direction]],
      where: buildDynamicQuery<PostAttachment>(body)
    })
    return items
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}

export const updateList = async (itemsUpdate: PostAttachment[]): Promise<PostAttachment[] | undefined> => {
  try {
    itemsUpdate.forEach(async (item) => {
      await PostAttachmentSchema.update({ ...item }, { where: { id: item.id } })
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
export const updateItemByPk = async (id: number, itemToUpdate: PostAttachment): Promise<PostAttachment | undefined> => {
  try {
    const affectedRows = await PostAttachmentSchema.update(
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
    return await PostAttachmentSchema.destroy({ where: { id: id } })
  } catch (error) {
    logging.error(NAMESPACE, `${error}`)
    throw `${error}`
  }
}
