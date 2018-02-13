import mongoose, { Schema } from 'mongoose'

const oilChangeSchema = new Schema({
  carID: {
    type: String
  },
  date: {
    type: String
  },
  mileage: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

oilChangeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      carID: this.carID,
      date: this.date,
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

const model = mongoose.model('OilChange', oilChangeSchema)

export const schema = model.schema
export default model
