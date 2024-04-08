import { Router } from 'express'
import ProductCategoryController from '../controllers/product-category.controller'
import { validationRules } from '../middleware/request-validator'

class ProductCategoryRoute {
  router = Router()
  controller = new ProductCategoryController()

  constructor() {
    this.initialize()
  }

  private initialize() {
    // Create new item
    this.router.post(
      '/',
      validationRules([
        { field: 'productID', fieldType: 'int', location: 'body' },
        { field: 'categoryID', fieldType: 'int', location: 'body' }
      ]),
      this.controller.createNewItem
    )

    // Get item by productCategoryID and importedID
    this.router.get(
      '/:id',
      validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]),
      this.controller.getItemByPk
    )

    // Get all items
    this.router.post(
      '/find',
      validationRules([
        { field: 'filter', fieldType: 'object', location: 'body' },
        { field: 'paginator', fieldType: 'object', location: 'body' },
        { field: 'search', fieldType: 'object', location: 'body' },
        { field: 'sorting', fieldType: 'object', location: 'body' }
      ]),
      this.controller.getItems
    )

    // Update item by productCategoryID and importedID
    this.router.put(
      '/:id',
      validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]),
      this.controller.updateItemByPk
    )

    this.router.put(
      '/categoryID/:categoryID',
      validationRules([{ field: 'categoryID', fieldType: 'int', location: 'params' }]),
      this.controller.updateItemByCategoryID
    )

    this.router.put(
      '/productID/:productID',
      validationRules([{ field: 'productID', fieldType: 'int', location: 'params' }]),
      this.controller.updateItemByProductID
    )

    // Delete item by productCategoryID
    this.router.delete(
      '/:id',
      validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]),
      this.controller.deleteItemByPk
    )
  }
}

export default new ProductCategoryRoute().router
