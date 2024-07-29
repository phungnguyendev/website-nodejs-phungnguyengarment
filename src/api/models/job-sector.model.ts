import { AfterCreate, Column, DataType, Model, Table } from 'sequelize-typescript'

const { INTEGER, STRING } = DataType

export interface JobSector {
  id?: number
  title?: string
  orderNumber?: number
}

@Table({
  modelName: 'JobSector',
  tableName: 'job_sectors',
  timestamps: true
})
export default class JobSectorSchema extends Model<JobSector> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: JobSectorSchema) {
    // You can perform additional actions here
    const count = await JobSectorSchema.count()
    await instance.update({ orderNumber: count })
  }
}
