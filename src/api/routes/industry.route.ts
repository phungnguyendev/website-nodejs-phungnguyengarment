import { Router } from 'express'
import IndustryController from '../controllers/industry.controller'
import { validationRules } from '../middleware/request-validator'

class IndustryRoute {
  router = Router()
  controller = new IndustryController()

  constructor() {
    this.initialize()
  }

  private initialize() {
    // Create new item
    this.router.post(
      '/',
      validationRules([
        { field: 'title', fieldType: 'string', location: 'body' },
        { field: 'desc', fieldType: 'string', location: 'body' }
      ]),
      this.controller.createNewItem
    )

    this.router.post(
      '/createOrUpdate/:id',
      validationRules([
        { field: 'id', fieldType: 'int', location: 'params' },
        { field: 'title', fieldType: 'string', location: 'body' }
      ]),
      this.controller.createNewItem
    )

    // Get item by productID and importedID
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

    // Update item by productID and importedID
    this.router.put(
      '/:id',
      validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]),
      this.controller.updateItemByPk
    )

    // Delete item by productID
    this.router.delete(
      '/:id',
      validationRules([{ field: 'id', fieldType: 'int', location: 'params' }]),
      this.controller.deleteItemByPk
    )
  }
}

export default new IndustryRoute().router
