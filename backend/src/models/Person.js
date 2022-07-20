const { model, Schema } = require('mongoose')

const useSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const User = model('User', useSchema)

module.exports = User
