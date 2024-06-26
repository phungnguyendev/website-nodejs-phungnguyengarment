import { AfterCreate, BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import BranchSchema from './branch.model'
import IndustrySectorSchema from './industry-sector.model'

const { INTEGER, STRING } = DataType

export interface RecruitmentPost {
  id?: number
  industrySectorID?: number
  banchID?: number
  vacancies?: string
  quantity?: string
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

  @Column({ type: INTEGER, field: 'id' })
  @ForeignKey(() => IndustrySectorSchema)
  declare industrySectorID: number

  @Column({ type: INTEGER, field: 'id' })
  @ForeignKey(() => BranchSchema)
  declare banchID: number

  @Column({ type: STRING, field: 'vacancies' })
  declare vacancies: string

  @Column({ type: STRING, field: 'quantity' })
  declare quantity: string

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

  @BelongsTo(() => IndustrySectorSchema)
  declare industrySector: IndustrySectorSchema

  @BelongsTo(() => BranchSchema)
  declare branch: BranchSchema

  @AfterCreate
  static async afterCreateHook(instance: RecruitmentPostSchema) {
    // You can perform additional actions here
    const count = await RecruitmentPostSchema.count()
    await instance.update({ orderNumber: count })
  }
}
