import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { OilChange } from '.'

const app = () => express(apiRoot, routes)

let oilChange

beforeEach(async () => {
  oilChange = await OilChange.create({})
})

test('POST /oilChanges 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ carID: 'test', date: 'test', mileage: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.carID).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.mileage).toEqual('test')
})

test('GET /oilChanges 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /oilChanges/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${oilChange.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(oilChange.id)
})

test('GET /oilChanges/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /oilChanges/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${oilChange.id}`)
    .send({ carID: 'test', date: 'test', mileage: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(oilChange.id)
  expect(body.carID).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.mileage).toEqual('test')
})

test('PUT /oilChanges/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ carID: 'test', date: 'test', mileage: 'test' })
  expect(status).toBe(404)
})

test('DELETE /oilChanges/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${oilChange.id}`)
  expect(status).toBe(204)
})

test('DELETE /oilChanges/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
