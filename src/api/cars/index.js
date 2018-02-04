import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Cars, { schema } from './model'

const router = new Router()
const { userId, make, model, year, milesPerDay, dateAdded, mileage } = schema.tree

/**
 * @api {post} /cars Create cars
 * @apiName CreateCars
 * @apiGroup Cars
 * @apiParam userId Cars's userId.
 * @apiParam make Cars's make.
 * @apiParam model Cars's model.
 * @apiParam year Cars's year.
 * @apiParam milesPerDay Cars's milesPerDay.
 * @apiParam dateAdded Cars's dateAdded.
 * @apiParam mileage Cars's mileage.
 * @apiSuccess {Object} cars Cars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cars not found.
 */
router.post('/',
  body({ userId, make, model, year, milesPerDay, dateAdded, mileage }),
  create)

/**
 * @api {get} /cars Retrieve cars
 * @apiName RetrieveCars
 * @apiGroup Cars
 * @apiUse listParams
 * @apiSuccess {Object[]} cars List of cars.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /cars/:id Retrieve cars
 * @apiName RetrieveCars
 * @apiGroup Cars
 * @apiSuccess {Object} cars Cars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cars not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /cars/:id Update cars
 * @apiName UpdateCars
 * @apiGroup Cars
 * @apiParam userId Cars's userId.
 * @apiParam make Cars's make.
 * @apiParam model Cars's model.
 * @apiParam year Cars's year.
 * @apiParam milesPerDay Cars's milesPerDay.
 * @apiParam dateAdded Cars's dateAdded.
 * @apiParam mileage Cars's mileage.
 * @apiSuccess {Object} cars Cars's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cars not found.
 */
router.put('/:id',
  body({ userId, make, model, year, milesPerDay, dateAdded, mileage }),
  update)

/**
 * @api {delete} /cars/:id Delete cars
 * @apiName DeleteCars
 * @apiGroup Cars
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Cars not found.
 */
router.delete('/:id',
  destroy)

export default router
