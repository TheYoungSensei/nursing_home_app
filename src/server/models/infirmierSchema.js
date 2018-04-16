import mongoose from 'mongoose';

export const infirmierSchema = mongoose.Schema();

infirmierSchema.add({
  name: String,
  email: String,
  phone: String,
  SPECIAL_STRANGE_NURSE_THING: String,
  zone: String,
  specificity: String,
  availability: String,
  dateSignUp: Date,
  logicalDelete: Boolean,
  cuid: { type: 'String', required: true }
});


export default mongoose.model('Infirmier', infirmierSchema);
