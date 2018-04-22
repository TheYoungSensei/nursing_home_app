import mongoose from 'mongoose';

export const infirmierSchema = new mongoose.Schema();

export const MALE = 0;
export const FEMALE = 1;

infirmierSchema.add({
  lastName: String,
  firstName: String,
  sexe: Number,
  inami: String,
  languages: [String],
  email: String,
  phone: String,
  description: String,
  zone: [String],
  postCodes: [String],
  specificity: String,
  availability: {
    dayTimes: [String],
    weekTimes: [String]
  },
  dateSignUp: Date,
  logicalDelete: Boolean,
  cuid: { type: 'String', required: true },
  index: Boolean
});


export default mongoose.model('Infirmier', infirmierSchema);
