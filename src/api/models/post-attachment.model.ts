import { AfterCreate, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import AttachmentSchema from './attachment.model'
import PostSchema from './post.model'

const { INTEGER, STRING } = DataType

export interface PostAttachment {
  id?: number
  postID?: number
  attachmentID?: number
  url?: string
  type?: string
  orderNumber?: number
}

@Table({
  modelName: 'PostAttachment',
  tableName: 'post_attachments',
  timestamps: true
})
export default class PostAttachmentSchema extends Model<PostAttachment> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: INTEGER, field: 'id' })
  @ForeignKey(() => PostSchema)
  declare postID: number

  @Column({ type: INTEGER, field: 'id' })
  @ForeignKey(() => AttachmentSchema)
  declare attachmentID: number

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: PostAttachmentSchema) {
    // You can perform additional actions here
    const count = await PostAttachmentSchema.count()
    await instance.update({ orderNumber: count })
  }
}
