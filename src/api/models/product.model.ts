import { AfterCreate, Column, DataType, HasOne, Model, Table } from 'sequelize-typescript'
import ProductCategorySchema from './product-category.model'

const { INTEGER, STRING } = DataType

export interface Product {
  id?: number
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

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: STRING, field: 'desc' })
  declare desc: string

  @Column({ type: STRING, field: 'image_id' })
  declare imageId: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @HasOne(() => ProductCategorySchema)
  declare productCategory: ProductCategorySchema

  @AfterCreate
  static async afterCreateHook(instance: ProductSchema) {
    // You can perform additional actions here
    const count = await ProductSchema.count()
    await instance.update({ orderNumber: count })
  }
}
