import { Router } from 'express'
import { validationRules } from '~/api/middleware/request-validator'
import * as controller from '~/controllers/auth/auth.controller'

const router = Router()

router.post(
  '/login',
  validationRules([
    { field: 'email', fieldType: 'string', location: 'body' },
    { field: 'password', fieldType: 'string', location: 'body' }
  ]),
  controller.login
)

router.post(
  '/register',
  validationRules([
    { field: 'email', fieldType: 'string', location: 'body' },
    { field: 'password', fieldType: 'string', location: 'body' }
  ]),
  controller.register
)

export default router
