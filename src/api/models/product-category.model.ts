import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import CategorySchema from './category.model'
import ProductSchema from './product.model'

const { INTEGER, STRING } = DataType

export interface ProductCategory {
  id?: number
  productID?: number
  categoryID?: number
}

@Table({
  modelName: 'ProductCategory',
  tableName: 'product_categories',
  timestamps: true
})
export default class ProductCategorySchema extends Model<ProductCategory> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: INTEGER, field: 'category_id' })
  @ForeignKey(() => CategorySchema)
  declare categoryID: number

  @Column({ type: INTEGER, field: 'product_id' })
  @ForeignKey(() => ProductSchema)
  declare productID: number

  @BelongsTo(() => ProductSchema)
  declare product: ProductSchema

  @BelongsTo(() => CategorySchema)
  declare category: CategorySchema
}
