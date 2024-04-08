import { Application } from 'express'
import attachmentRoute from './attachment.route'
import authRoute from './auth/auth.route'
import categoryRoute from './category.route'
import googleRoute from './google/google.route'
import heroBannerRoute from './hero-banner.route'
import homeProductRoute from './home-product.route'
import industrySectorRoute from './industry-sector.route'
import partnerRoute from './partner.route'
import postAttachmentRoute from './post-attachment.route'
import postRoute from './post.route'
import prizeRoute from './prize.route'
import productCategoryRoute from './product-category.route'
import productRoute from './product.route'
import projectRoute from './project.route'
import recruitmentPostRoute from './recruitment-post.route'
import userRoute from './user.route'

export default class AppRoutes {
  constructor(app: Application) {
    app.use('/api/users', userRoute)
    app.use('/api/auth', authRoute)
    app.use('/api/google', googleRoute)
    app.use('/api/hero-banners', heroBannerRoute)
    app.use('/api/home-products', homeProductRoute)
    app.use('/api/partners', partnerRoute)
    app.use('/api/prizes', prizeRoute)
    app.use('/api/projects', projectRoute)
    app.use('/api/categories', categoryRoute)
    app.use('/api/products', productRoute)
    app.use('/api/product-categories', productCategoryRoute)
    app.use('/api/posts', postRoute)
    app.use('/api/post-attachments', postAttachmentRoute)
    app.use('/api/attachments', attachmentRoute)
    app.use('/api/industry-sectors', industrySectorRoute)
    app.use('/api/recruitment-posts', recruitmentPostRoute)
  }
}
