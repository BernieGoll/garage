import { Cars } from '.'

let cars

beforeEach(async () => {
  cars = await Cars.create({ userId: 'test', make: 'test', model: 'test', year: 'test', milesPerDay: 'test', dateAdded: 'test', mileage: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = cars.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cars.id)
    expect(view.userId).toBe(cars.userId)
    expect(view.make).toBe(cars.make)
    expect(view.model).toBe(cars.model)
    expect(view.year).toBe(cars.year)
    expect(view.milesPerDay).toBe(cars.milesPerDay)
    expect(view.dateAdded).toBe(cars.dateAdded)
    expect(view.mileage).toBe(cars.mileage)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = cars.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cars.id)
    expect(view.userId).toBe(cars.userId)
    expect(view.make).toBe(cars.make)
    expect(view.model).toBe(cars.model)
    expect(view.year).toBe(cars.year)
    expect(view.milesPerDay).toBe(cars.milesPerDay)
    expect(view.dateAdded).toBe(cars.dateAdded)
    expect(view.mileage).toBe(cars.mileage)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
