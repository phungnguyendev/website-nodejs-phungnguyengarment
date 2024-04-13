import { AfterCreate, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import PostAttachmentSchema from './post-attachment.model'

const { INTEGER, STRING, BLOB } = DataType

export interface Post {
  id?: number
  title?: string
  content?: string
  thumbID?: string
  publishedAt?: string
  orderNumber?: number
}

@Table({
  modelName: 'Post',
  tableName: 'posts',
  timestamps: true
})
export default class PostSchema extends Model<Post> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: STRING(10000), field: 'content' })
  declare content: string

  @Column({ type: STRING, field: 'thumb_id' })
  declare thumbID: string

  @Column({ type: STRING, field: 'published_at' })
  declare publishedAt: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: PostSchema) {
    // You can perform additional actions here
    const count = await PostSchema.count()
    await instance.update({ orderNumber: count })
  }

  @HasMany(() => PostAttachmentSchema)
  declare postAttachment: PostAttachmentSchema
}
