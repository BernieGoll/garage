import mongoose, { Schema } from 'mongoose'

const usersSchema = new Schema({
  full_name: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  carID: {
    type: Number
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

usersSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      full_name: this.full_name,
      username: this.username,
      password: this.password,
      email: this.email,
      carID: this.carID,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Users', usersSchema)

export const schema = model.schema
export default model
