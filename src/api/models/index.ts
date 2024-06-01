import bcrypt from 'bcrypt'
import { Sequelize } from 'sequelize-typescript'
import appConfig from '~/config/app.config'
import databaseConfig from '~/config/database.config'
import logging from '~/utils/logging'
import AttachmentSchema from './attachment.model'
import BranchSchema from './branch.model'
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
  BranchSchema,
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
  .then(async () => {
    // Check admin exist
    const userExist = await UserSchema.count()
    if (userExist <= 0) {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(appConfig.nodemailer.admin_password_original, salt)
      const userCreated = await UserSchema.create({
        email: appConfig.nodemailer.admin_user,
        hashPassword: hashedPassword
      })
      logging.info(
        PATH,
        userCreated ? 'Admin account has been created successful! ✅' : 'Admin account create failed! ❌'
      )
    }
    logging.info(PATH, 'Connection has been established successfully. 🥳🎉')
  })
  .catch((error) => logging.error(PATH, `Unable to connect to the database: ${error}`))

export default sequelize
