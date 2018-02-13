import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export OilChange, { schema } from './model'

const router = new Router()
const { carID, date, mileage } = schema.tree

/**
 * @api {post} /oilChanges Create oil change
 * @apiName CreateOilChange
 * @apiGroup OilChange
 * @apiParam carID Oil change's carID.
 * @apiParam date Oil change's date.
 * @apiParam mileage Oil change's mileage.
 * @apiSuccess {Object} oilChange Oil change's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Oil change not found.
 */
router.post('/',
  body({ carID, date, mileage }),
  create)

/**
 * @api {get} /oilChanges Retrieve oil changes
 * @apiName RetrieveOilChanges
 * @apiGroup OilChange
 * @apiUse listParams
 * @apiSuccess {Object[]} oilChanges List of oil changes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /oilChanges/:id Retrieve oil change
 * @apiName RetrieveOilChange
 * @apiGroup OilChange
 * @apiSuccess {Object} oilChange Oil change's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Oil change not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /oilChanges/:id Update oil change
 * @apiName UpdateOilChange
 * @apiGroup OilChange
 * @apiParam carID Oil change's carID.
 * @apiParam date Oil change's date.
 * @apiParam mileage Oil change's mileage.
 * @apiSuccess {Object} oilChange Oil change's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Oil change not found.
 */
router.put('/:id',
  body({ carID, date, mileage }),
  update)

/**
 * @api {delete} /oilChanges/:id Delete oil change
 * @apiName DeleteOilChange
 * @apiGroup OilChange
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Oil change not found.
 */
router.delete('/:id',
  destroy)

export default router
