import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt-as-promised'

const UsersSchema = new Schema({
  username: { type: String, unique: true, lowercase: true, index: true },
  password: String,
  isAdmin: Boolean
})

const getHash = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

UsersSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next()
  }
  this.password = await getHash(this.password)
  next()
})

UsersSchema.methods.comparePasswords = function(password) {
  return bcrypt.compare(password, this.password)
}

UsersSchema.pre("updateOne", async function(next) {
  if (!this._update.$set.password) {
    return next()
  }
  this._update.$set.password = await getHash(this._update.$set.password)
  next()
})

export default mongoose.model("Users", UsersSchema)
