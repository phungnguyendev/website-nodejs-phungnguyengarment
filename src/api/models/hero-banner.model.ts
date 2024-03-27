import { AfterCreate, Column, DataType, Model, Table } from 'sequelize-typescript'

const { INTEGER, STRING } = DataType

export interface HeroBanner {
  id?: number
  title?: string
  imageUrl?: string
  orderNumber?: number
}

@Table({
  modelName: 'HeroBanner',
  tableName: 'hero_banners',
  timestamps: true
})
export default class HeroBannerSchema extends Model<HeroBanner> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: STRING, field: 'image_url' })
  declare imageUrl: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: HeroBannerSchema) {
    // You can perform additional actions here
    const count = await HeroBannerSchema.count()
    await instance.update({ orderNumber: count })
  }
}
