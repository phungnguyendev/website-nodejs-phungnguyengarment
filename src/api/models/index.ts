import { Sequelize } from 'sequelize-typescript'
import databaseConfig from '~/config/database.config'
import logging from '~/utils/logging'
import AttachmentSchema from './attachment.model'
import CategorySchema from './category.model'
import HeroBannerSchema from './hero-banner.model'
import HomeProductSchema from './home-product.model'
import IndustrySectorSchema from './industry-sector.model'
import PartnerSchema from './partner.model'
import PostAttachmentSchema from './post-attachment.model'
import PostSchema from './post.model'
import PrizeSchema from './prize.model'
import ProductCategorySchema from './product-category.model'
import ProductSchema from './product.model'
import ProjectSchema from './project.model'
import RecruitmentPostSchema from './recruitment-post.model'
import UserSchema from './user.model'

const PATH = 'model/index'

const sequelize = new Sequelize(databaseConfig)

sequelize?.addModels([
  UserSchema,
  AttachmentSchema,
  CategorySchema,
  HeroBannerSchema,
  HomeProductSchema,
  IndustrySectorSchema,
  PartnerSchema,
  PostAttachmentSchema,
  PostSchema,
  PrizeSchema,
  ProductSchema,
  ProductCategorySchema,
  ProjectSchema,
  RecruitmentPostSchema
])

sequelize
  .authenticate()
  .then(() => logging.info(PATH, 'Connection has been established successfully. 👏'))
  .catch((error) => logging.error(PATH, `Unable to connect to the database: ${error}`))

// class DBConnection {
//   private static instance: DBConnection
//   public sequelize: Sequelize | undefined

//   constructor() {
//     this.createConnection()
//   }

//   public static getInstance(): DBConnection {
//     if (!DBConnection.instance) {
//       DBConnection.instance = new DBConnection()
//     }
//     return DBConnection.instance
//   }

//   async createConnection() {
//     this.sequelize = new Sequelize(databaseConfig)

//     await this.sequelize
//       .authenticate()
//       .then(() => logging.info(PATH, 'Connection has been established successfully. 👏'))
//       .catch((error) => logging.error(PATH, `Unable to connect to the database: ${error}`))
//   }

//   async closeConnection() {
//     if (this.sequelize) {
//       await this.sequelize
//         .close()
//         .then(() => logging.info(PATH, 'Connection has been closed'))
//         .catch((error) => logging.error(PATH, `Unable to close the database: ${error}`))
//     }
//   }
// }

// export const sequelizeInstance = DBConnection.getInstance().sequelize

export default sequelize
