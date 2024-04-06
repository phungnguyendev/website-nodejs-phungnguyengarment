import { Column, DataType, Model, Table } from 'sequelize-typescript'

const { INTEGER, STRING } = DataType

export interface User {
  id?: number
  email?: string
  password?: string
  avatar?: string
  phone?: string
  otp?: string | null
  appPassword?: string
  accessToken?: string
}

@Table({
  modelName: 'User',
  tableName: 'users',
  timestamps: true
})
export default class UserSchema extends Model<User> {
  @Column({ type: INTEGER, primaryKey: true, autoIncrement: true, field: 'id' })
  declare id: number

  @Column({ type: STRING, field: 'email' })
  declare email: string

  @Column({ type: STRING, field: 'password' })
  declare password: string

  @Column({ type: STRING, field: 'avatar' })
  declare avatar: string

  @Column({ type: STRING, field: 'phone' })
  declare phone: string

  @Column({ type: STRING, field: 'otp' })
  declare otp: string

  @Column({ type: STRING, field: 'app_password' })
  declare appPassword: string

  @Column({ type: STRING, field: 'access_token' })
  declare accessToken: string
}
