import { success, notFound } from '../../services/response/'
import { Users } from '.'

// POST request
export const create = ({ bodymen: { body } }, res, next) =>
  Users.create(body)
    .then((users) => users.view(true))
    .then(success(res, 201))
    .catch(next)

// GET request (all users)
export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Users.find(query, select, cursor)
    .then((users) => users.map((users) => users.view()))
    .then(success(res))
    .catch(next)

// GET request (one user)
export const show = ({ params }, res, next) =>
  Users.findById(params.id)
    .then(notFound(res))
    .then((users) => users ? users.view() : null)
    .then(success(res))
    .catch(next)

// PUT request (update one user)
export const update = ({ bodymen: { body }, params }, res, next) =>
  Users.findById(params.id)
    .then(notFound(res))
    .then((users) => users ? Object.assign(users, body).save() : null)
    .then((users) => users ? users.view(true) : null)
    .then(success(res))
    .catch(next)
    
// DELETE request (delete one user)
export const destroy = ({ params }, res, next) =>
  Users.findById(params.id)
    .then(notFound(res))
    .then((users) => users ? users.remove() : null)
    .then(success(res, 204))
    .catch(next)
