import { Router } from 'express'
import { verifyAccessToken } from '../middleware/auth.middleware'
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

const router = Router()

router.use('/auth', authRoute)
router.use('/google', googleRoute)
router.use('/hero-banners', heroBannerRoute)
router.use('/home-products', homeProductRoute)
router.use('/partners', partnerRoute)
router.use('/prizes', prizeRoute)
router.use('/projects', projectRoute)
router.use('/categories', categoryRoute)
router.use('/products', productRoute)
router.use('/product-categories', productCategoryRoute)
router.use('/posts', postRoute)
router.use('/post-attachments', postAttachmentRoute)
router.use('/attachments', attachmentRoute)
router.use('/industry-sectors', industrySectorRoute)
router.use('/recruitment-posts', recruitmentPostRoute)

export default router
