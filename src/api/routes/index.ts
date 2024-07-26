import { Router } from 'express'
import attachmentRoute from './attachment.route'
import authRoute from './auth/auth.route'
import categoryRoute from './category.route'
import heroBannerRoute from './hero-banner.route'
import homeProductRoute from './home-product.route'
import industrySectorRoute from './industry-sector.route'
import partnerRoute from './partner.route'
import postAttachmentRoute from './post-attachment.route'
import postRoute from './post.route'
import prizeRoute from './prize.route'
import productRoute from './product.route'
import projectRoute from './project.route'
import recruitmentPostRoute from './recruitment-post.route'

const router = Router()

// Đường dẫn đến thư mục public
router.use('/auth', authRoute)
router.use('/hero-banners', heroBannerRoute) // R
router.use('/home-products', homeProductRoute) // R
router.use('/partners', partnerRoute) // R
router.use('/prizes', prizeRoute) // R
router.use('/projects', projectRoute) // R
router.use('/categories', categoryRoute) // R
router.use('/products', productRoute) // R
router.use('/posts', postRoute) // R
router.use('/post-attachments', postAttachmentRoute) // R
router.use('/attachments', attachmentRoute) // R
router.use('/industry-sectors', industrySectorRoute) // R
router.use('/recruitments', recruitmentPostRoute) // R

export default router
