// General configurations
import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'

// Importing all functions from controller.js
import { create, index, show, update, destroy } from './controller'

// Importing user schema from model.js
import { schema } from './model'
export Users, { schema } from './model'

const router = new Router()
const { full_name, carId } = schema.tree

/**
 * @api {post} /users Create users
 * @apiName CreateUsers
 * @apiGroup Users
 * @apiParam name Users's name.
 * @apiParam carId Users's carId.
 * @apiSuccess {Object} users Users's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users not found.
 */

 /**
  * When we post to http://0.0.0.0:9000/api/users
  * Execute create method from controller.js
  */
router.post('/',
  body({ full_name, carId }),
  create)

/**
 * @api {get} /users Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup Users
 * @apiUse listParams
 * @apiSuccess {Object[]} users List of users.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
  * When we get from http://0.0.0.0:9000/api/users
  * Execute index method from controller.js
  */
router.get('/',
  query(),
  index)

/**
 * @api {get} /users/:id Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup Users
 * @apiSuccess {Object} users Users's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /users/:id Update users
 * @apiName UpdateUsers
 * @apiGroup Users
 * @apiParam name Users's name.
 * @apiParam carId Users's carId.
 * @apiSuccess {Object} users Users's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users not found.
 */
router.put('/:id',
  body({ full_name, carId }),
  update)

/**
 * @api {delete} /users/:id Delete users
 * @apiName DeleteUsers
 * @apiGroup Users
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Users not found.
 */
router.delete('/:id',
  destroy)

export default router
