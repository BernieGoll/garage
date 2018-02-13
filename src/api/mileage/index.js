import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Mileage, { schema } from './model'

const router = new Router()
const { carID, mileage, date } = schema.tree

/**
 * @api {post} /mileages Create mileage
 * @apiName CreateMileage
 * @apiGroup Mileage
 * @apiParam carID Mileage's carID.
 * @apiParam mileage Mileage's mileage.
 * @apiParam date Mileage's date.
 * @apiSuccess {Object} mileage Mileage's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mileage not found.
 */
router.post('/',
  body({ carID, mileage, date }),
  create)

/**
 * @api {get} /mileages Retrieve mileages
 * @apiName RetrieveMileages
 * @apiGroup Mileage
 * @apiUse listParams
 * @apiSuccess {Object[]} mileages List of mileages.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /mileages/:id Retrieve mileage
 * @apiName RetrieveMileage
 * @apiGroup Mileage
 * @apiSuccess {Object} mileage Mileage's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mileage not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /mileages/:id Update mileage
 * @apiName UpdateMileage
 * @apiGroup Mileage
 * @apiParam carID Mileage's carID.
 * @apiParam mileage Mileage's mileage.
 * @apiParam date Mileage's date.
 * @apiSuccess {Object} mileage Mileage's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mileage not found.
 */
router.put('/:id',
  body({ carID, mileage, date }),
  update)

/**
 * @api {delete} /mileages/:id Delete mileage
 * @apiName DeleteMileage
 * @apiGroup Mileage
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Mileage not found.
 */
router.delete('/:id',
  destroy)

export default router
