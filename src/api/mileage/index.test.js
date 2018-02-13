import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Mileage } from '.'

const app = () => express(apiRoot, routes)

let mileage

beforeEach(async () => {
  mileage = await Mileage.create({})
})

test('POST /mileages 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ carID: 'test', mileage: 'test', date: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.carID).toEqual('test')
  expect(body.mileage).toEqual('test')
  expect(body.date).toEqual('test')
})

test('GET /mileages 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /mileages/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${mileage.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(mileage.id)
})

test('GET /mileages/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /mileages/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${mileage.id}`)
    .send({ carID: 'test', mileage: 'test', date: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(mileage.id)
  expect(body.carID).toEqual('test')
  expect(body.mileage).toEqual('test')
  expect(body.date).toEqual('test')
})

test('PUT /mileages/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ carID: 'test', mileage: 'test', date: 'test' })
  expect(status).toBe(404)
})

test('DELETE /mileages/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${mileage.id}`)
  expect(status).toBe(204)
})

test('DELETE /mileages/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
