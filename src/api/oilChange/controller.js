import { success, notFound } from '../../services/response/'
import { OilChange } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  OilChange.create(body)
    .then((oilChange) => oilChange.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  OilChange.find(query, select, cursor)
    .then((oilChanges) => oilChanges.map((oilChange) => oilChange.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  OilChange.findById(params.id)
    .then(notFound(res))
    .then((oilChange) => oilChange ? oilChange.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  OilChange.findById(params.id)
    .then(notFound(res))
    .then((oilChange) => oilChange ? Object.assign(oilChange, body).save() : null)
    .then((oilChange) => oilChange ? oilChange.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  OilChange.findById(params.id)
    .then(notFound(res))
    .then((oilChange) => oilChange ? oilChange.remove() : null)
    .then(success(res, 204))
    .catch(next)
