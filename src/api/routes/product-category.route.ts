import { Router } from 'express'
import * as controller from '~/controllers/product-category.controller'
import { validationRules } from '../middleware/request-validator'

const router = Router()
// Create new item
router.post(
  '/',
  validationRules([
    { field: 'productID', fieldType: 'int', location: 'body' },
    { field: 'categoryID', fieldType: 'int', location: 'body' }
  ]),
  controller.createNewItem
)

// Get item by productCategoryID and importedID
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

// Update item by productCategoryID and importedID
router.put('/:id', validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]), controller.updateItemByPk)

router.put(
  '/categoryID/:categoryID',
  validationRules([{ field: 'categoryID', fieldType: 'int', location: 'params' }]),
  controller.updateItemByCategoryID
)

router.put(
  '/productID/:productID',
  validationRules([{ field: 'productID', fieldType: 'int', location: 'params' }]),
  controller.updateItemByProductID
)

// Delete item by productCategoryID
router.delete(
  '/:id',
  validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]),
  controller.deleteItemByPk
)

export default router
