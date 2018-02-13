import mongoose, { Schema } from 'mongoose'

const mileageSchema = new Schema({
  carID: {
    type: String
  },
  mileage: {
    type: String
  },
  date: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

mileageSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      carID: this.carID,
      mileage: this.mileage,
      date: this.date,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Mileage', mileageSchema)

export const schema = model.schema
export default model
