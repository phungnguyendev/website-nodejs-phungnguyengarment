import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import RecruitmentPostSchema from './recruitment-post.model'

const { INTEGER, STRING } = DataType

export interface Branch {
  id?: number
  title?: string
  orderNumber?: number
}

@Table({
  modelName: 'Branch',
  tableName: 'branches',
  timestamps: true
})
export default class BranchSchema extends Model<Branch> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'title' })
  declare title: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @HasMany(() => RecruitmentPostSchema)
  declare recruitmentPost: RecruitmentPostSchema
}
