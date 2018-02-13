import { OilChange } from '.'

let oilChange

beforeEach(async () => {
  oilChange = await OilChange.create({ carID: 'test', date: 'test', mileage: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = oilChange.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(oilChange.id)
    expect(view.carID).toBe(oilChange.carID)
    expect(view.date).toBe(oilChange.date)
    expect(view.mileage).toBe(oilChange.mileage)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = oilChange.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(oilChange.id)
    expect(view.carID).toBe(oilChange.carID)
    expect(view.date).toBe(oilChange.date)
    expect(view.mileage).toBe(oilChange.mileage)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
