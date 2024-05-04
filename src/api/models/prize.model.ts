import { AfterCreate, Column, DataType, Model, Table } from 'sequelize-typescript'

const { INTEGER, STRING } = DataType

export interface Prize {
  id?: number
  title?: string
  imageUrl?: string
  orderNumber?: number
}

@Table({
  modelName: 'Prize',
  tableName: 'prizes',
  timestamps: true
})
export default class PrizeSchema extends Model<Prize> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: STRING, field: 'image_url' })
  declare imageUrl: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: PrizeSchema) {
    // You can perform additional actions here
    const count = await PrizeSchema.count()
    await instance.update({ orderNumber: count })
  }
}
