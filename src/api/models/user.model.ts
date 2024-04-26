import { Column, DataType, Model, Table } from 'sequelize-typescript'

const { INTEGER, STRING } = DataType

export interface User {
  id?: number
  email?: string
  hashPassword?: string
  avatar?: string
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

  @Column({
    type: STRING,
    field: 'hash_password'
  })
  declare hashPassword: string

  @Column({ type: STRING, field: 'avatar' })
  declare avatar: string
}
