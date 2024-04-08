import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import AttachmentSchema from './attachment.model'
import PostSchema from './post.model'

const { INTEGER, STRING } = DataType

export interface PostAttachment {
  id?: number
  postID?: number
  attachmentID?: number
}

@Table({
  modelName: 'PostAttachment',
  tableName: 'post_attachments',
  timestamps: true
})
export default class PostAttachmentSchema extends Model<PostAttachment> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: INTEGER, field: 'post_id' })
  @ForeignKey(() => PostSchema)
  declare postID: number

  @Column({ type: INTEGER, field: 'attachment_id' })
  @ForeignKey(() => AttachmentSchema)
  declare attachmentID: number

  @BelongsTo(() => PostSchema)
  declare post: PostSchema

  @BelongsTo(() => AttachmentSchema)
  declare attachment: AttachmentSchema
}
