import { AfterCreate, Column, DataType, Model, Table } from 'sequelize-typescript'

const { INTEGER, STRING } = DataType

export interface Attachment {
  id?: number
  url?: string
  type?: string
  caption?: string
  orderNumber?: number
}

@Table({
  modelName: 'Attachment',
  tableName: 'attachments',
  timestamps: true
})
export default class AttachmentSchema extends Model<Attachment> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'url' })
  declare url: string

  @Column({ type: STRING, field: 'type' })
  declare type: string

  @Column({ type: STRING, field: 'caption' })
  declare caption: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: AttachmentSchema) {
    // You can perform additional actions here
    const count = await AttachmentSchema.count()
    await instance.update({ orderNumber: count })
  }
}
