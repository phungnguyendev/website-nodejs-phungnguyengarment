import { AfterCreate, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import CategorySchema from './category.model'

const { INTEGER, STRING } = DataType

export interface Product {
  id?: number
  categoryID?: number
  title?: string
  desc?: string
  imageId?: string
  orderNumber?: number
}

@Table({
  modelName: 'Product',
  tableName: 'products',
  timestamps: true
})
export default class ProductSchema extends Model<Product> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: INTEGER, field: 'id' })
  @ForeignKey(() => CategorySchema)
  declare categoryID: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: STRING, field: 'desc' })
  declare desc: string

  @Column({ type: STRING, field: 'image_id' })
  declare imageId: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: ProductSchema) {
    // You can perform additional actions here
    const count = await ProductSchema.count()
    await instance.update({ orderNumber: count })
  }
}
