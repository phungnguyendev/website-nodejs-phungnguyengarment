import { AfterCreate, Column, DataType, Model, Table } from 'sequelize-typescript'

const { INTEGER, STRING } = DataType

export interface IndustrySector {
  id?: number
  title?: string
  orderNumber?: number
}

@Table({
  modelName: 'IndustrySector',
  tableName: 'industry_sectors',
  timestamps: true
})
export default class IndustrySectorSchema extends Model<IndustrySector> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: IndustrySectorSchema) {
    // You can perform additional actions here
    const count = await IndustrySectorSchema.count()
    await instance.update({ orderNumber: count })
  }
}
