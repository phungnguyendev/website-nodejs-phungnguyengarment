import { Router } from 'express'
import PartnerController from '../controllers/partner.controller'
import { validationRules } from '../middleware/request-validator'

class PartnerRoute {
  router = Router()
  controller = new PartnerController()

  constructor() {
    this.initialize()
  }

  private initialize() {
    // Create new item
    this.router.post(
      '/',
      validationRules([
        { field: 'title', fieldType: 'string', location: 'body' },
        { field: 'imageUrl', fieldType: 'string', location: 'body' }
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

export default new PartnerRoute().router