import mongoose, { Schema } from 'mongoose'

const NewsSchema = new Schema({
  title: { type: String, require: true },
  body: { type: String, require: true },
  creationDate: { type: Date, require: true, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

export default mongoose.model("News", NewsSchema)
