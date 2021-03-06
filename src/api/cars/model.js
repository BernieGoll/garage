import mongoose, { Schema } from 'mongoose'

const carsSchema = new Schema({
  userId: {
    type: Number
  },
  make: {
    type: String
  },
  model: {
    type: String
  },
  year: {
    type: Number
  },
  milesPerDay: {
    type: Number
  },
  dateAdded: {
    type: Date
  },
  mileage: {
    type: Number
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

carsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      make: this.make,
      model: this.model,
      year: this.year,
      milesPerDay: this.milesPerDay,
      dateAdded: this.dateAdded,
      mileage: this.mileage,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Cars', carsSchema)

export const schema = model.schema
export default model
