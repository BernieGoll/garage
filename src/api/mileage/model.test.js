import { Mileage } from '.'

let mileage

beforeEach(async () => {
  mileage = await Mileage.create({ carID: 'test', mileage: 'test', date: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = mileage.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(mileage.id)
    expect(view.carID).toBe(mileage.carID)
    expect(view.mileage).toBe(mileage.mileage)
    expect(view.date).toBe(mileage.date)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = mileage.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(mileage.id)
    expect(view.carID).toBe(mileage.carID)
    expect(view.mileage).toBe(mileage.mileage)
    expect(view.date).toBe(mileage.date)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
