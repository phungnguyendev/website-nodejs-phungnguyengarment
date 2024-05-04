import { Router } from 'express'
import * as controller from '~/controllers/product.controller'
import { validationRules } from '~/middleware/request-validator'

const router = Router()

// Create new item
router.post(
  '/',
  validationRules([
    { field: 'title', fieldType: 'string', location: 'body' },
    { field: 'imageUrl', fieldType: 'string', location: 'body' },
    { field: 'categoryID', fieldType: 'int', location: 'body' }
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

router.post('/all', controller.updateList)

// Update item by productID and importedID
router.put('/:id', validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]), controller.updateItemByPk)

// Delete item by productID
router.delete(
  '/:id',
  validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]),
  controller.deleteItemByPk
)

export default router
