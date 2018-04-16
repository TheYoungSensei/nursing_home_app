import mongoose from 'mongoose';

export const adminSchema = mongoose.Schema();

adminSchema.add({
  name: String,
  password: String,
  dateSignUp: Date,
  logicalDelete: Boolean,
  cuid: { type: 'String', required: true }
});


export default mongoose.model('Admin', adminSchema);
