import { AfterCreate, Column, DataType, Model, Table } from 'sequelize-typescript'

const { INTEGER, STRING } = DataType

export interface Project {
  id?: number
  title?: string
  desc?: string
  imageName?: string
  orderNumber?: number
}

@Table({
  modelName: 'Project',
  tableName: 'projects',
  timestamps: true
})
export default class ProjectSchema extends Model<Project> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: STRING, field: 'desc' })
  declare desc: string

  @Column({ type: STRING, field: 'image_name' })
  declare imageName: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @AfterCreate
  static async afterCreateHook(instance: ProjectSchema) {
    // You can perform additional actions here
    const count = await ProjectSchema.count()
    await instance.update({ orderNumber: count })
  }
}
