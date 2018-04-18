import mongoose, { Schema } from 'mongoose';


const adminSchema = new Schema({
  name: String,
  password: String,
  dateSignUp: Date,
  logicalDelete: Boolean,
  cuid: { type: 'String', required: true }
});

module.exports = mongoose.model('admins', adminSchema);
