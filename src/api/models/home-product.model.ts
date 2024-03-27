import { AfterCreate, Column, DataType, Model, Table } from 'sequelize-typescript'

const { INTEGER, STRING } = DataType

export interface HomeProduct {
  id?: number
  title?: string
  imageUrl?: string
  orderNumber?: number
}

@Table({
  modelName: 'HomeProduct',
  tableName: 'home_products',
  timestamps: true
})
export default class HomeProductSchema extends Model<HomeProduct> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: STRING, field: 'image_url' })
  declare imageUrl: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: HomeProductSchema) {
    // You can perform additional actions here
    const count = await HomeProductSchema.count()
    await instance.update({ orderNumber: count })
  }
}
