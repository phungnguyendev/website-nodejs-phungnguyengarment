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
router.use('/google', verifyAccessToken, googleRoute)
router.use('/hero-banners', verifyAccessToken, heroBannerRoute)
router.use('/home-products', verifyAccessToken, homeProductRoute)
router.use('/partners', verifyAccessToken, partnerRoute)
router.use('/prizes', verifyAccessToken, prizeRoute)
router.use('/projects', verifyAccessToken, projectRoute)
router.use('/categories', verifyAccessToken, categoryRoute)
router.use('/products', verifyAccessToken, productRoute)
router.use('/product-categories', verifyAccessToken, productCategoryRoute)
router.use('/posts', verifyAccessToken, postRoute)
router.use('/post-attachments', verifyAccessToken, postAttachmentRoute)
router.use('/attachments', verifyAccessToken, attachmentRoute)
router.use('/industry-sectors', verifyAccessToken, industrySectorRoute)
router.use('/recruitment-posts', verifyAccessToken, recruitmentPostRoute)

export default router
