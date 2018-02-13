import { success, notFound } from '../../services/response/'
import { Mileage } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Mileage.create(body)
    .then((mileage) => mileage.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Mileage.find(query, select, cursor)
    .then((mileages) => mileages.map((mileage) => mileage.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Mileage.findById(params.id)
    .then(notFound(res))
    .then((mileage) => mileage ? mileage.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Mileage.findById(params.id)
    .then(notFound(res))
    .then((mileage) => mileage ? Object.assign(mileage, body).save() : null)
    .then((mileage) => mileage ? mileage.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Mileage.findById(params.id)
    .then(notFound(res))
    .then((mileage) => mileage ? mileage.remove() : null)
    .then(success(res, 204))
    .catch(next)
