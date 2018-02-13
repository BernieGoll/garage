import { Users } from '.'

let users

beforeEach(async () => {
  users = await Users.create({ full_name: 'test', username: 'test', password: 'test', email: 'test', carID: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = users.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(users.id)
    expect(view.full_name).toBe(users.full_name)
    expect(view.username).toBe(users.username)
    expect(view.password).toBe(users.password)
    expect(view.email).toBe(users.email)
    expect(view.carID).toBe(users.carID)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = users.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(users.id)
    expect(view.full_name).toBe(users.full_name)
    expect(view.username).toBe(users.username)
    expect(view.password).toBe(users.password)
    expect(view.email).toBe(users.email)
    expect(view.carID).toBe(users.carID)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
