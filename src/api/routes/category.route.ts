import { Router } from 'express'
import * as controller from '~/controllers/category.controller'
import { validationRules } from '~/middleware/request-validator'

const router = Router()

router.post(
  '/',
  validationRules([
    { field: 'title', fieldType: 'string', location: 'body' },
    { field: 'imageUrl', fieldType: 'string', location: 'body' }
  ]),
  controller.createNewItem
)

// Get item by productID and importedID
router.get('/:id', validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]), controller.getItemByPk)

// Get all items
router.post(
  '/find',
  validationRules([
    { field: 'filter', fieldType: 'object', location: 'body' },
    { field: 'paginator', fieldType: 'object', location: 'body' },
    { field: 'search', fieldType: 'object', location: 'body' },
    { field: 'sorting', fieldType: 'object', location: 'body' }
  ]),
  controller.getItems
)

// Update item by productID and importedID
router.patch(
  '/:id',
  validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]),
  controller.updateItemByPk
)

// Update item by productID and importedID
router.put('/', controller.updateItems)

// Delete item by productID
router.delete(
  '/:id',
  validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]),
  controller.deleteItemByPk
)

export default router
