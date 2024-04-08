import { AfterCreate, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import ProductCategorySchema from './product-category.model'

const { INTEGER, STRING } = DataType

export interface Category {
  id?: number
  icon?: string
  title?: string
  desc?: string
  orderNumber?: number
}

@Table({
  modelName: 'Category',
  tableName: 'categories',
  timestamps: true
})
export default class CategorySchema extends Model<Category> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: STRING, field: 'icon' })
  declare icon: string

  @Column({ type: STRING, field: 'desc' })
  declare desc: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @HasMany(() => ProductCategorySchema)
  declare productCategory: ProductCategorySchema

  @AfterCreate
  static async afterCreateHook(instance: CategorySchema) {
    // You can perform additional actions here
    const count = await CategorySchema.count()
    await instance.update({ orderNumber: count })
  }
}
