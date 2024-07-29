import { AfterCreate, BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import JobSectorSchema from './job-sector.model'

const { INTEGER, STRING } = DataType

export interface RecruitmentPost {
  id?: number
  jobSectorID?: number
  quantity?: number
  wage?: string
  workingTime?: string
  workingPlace?: string
  expirationDate?: string
  orderNumber?: number
}

@Table({
  modelName: 'RecruitmentPost',
  tableName: 'recruitment_posts',
  timestamps: true
})
export default class RecruitmentPostSchema extends Model<RecruitmentPost> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: INTEGER, field: 'job_sector_id' })
  @ForeignKey(() => JobSectorSchema)
  declare jobSectorID: number

  @Column({ type: INTEGER, field: 'quantity' })
  declare quantity: number

  @Column({ type: STRING, field: 'wage' })
  declare wage: string

  @Column({ type: STRING, field: 'working_time' })
  declare workingTime: string

  @Column({ type: STRING, field: 'working_place' })
  declare workingPlace: string

  @Column({ type: STRING, field: 'expiration_date' })
  declare expirationDate: string

  @Column({ type: INTEGER, field: 'order_number' })
  declare orderNumber: number

  @BelongsTo(() => JobSectorSchema)
  declare jobSector: JobSectorSchema

  @AfterCreate
  static async afterCreateHook(instance: RecruitmentPostSchema) {
    // You can perform additional actions here
    const count = await RecruitmentPostSchema.count()
    await instance.update({ orderNumber: count })
  }
}
