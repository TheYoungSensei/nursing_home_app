import mongoose from 'mongoose';

export const patientRequestSchema = new mongoose.Schema();

patientRequestSchema.add({
  name: String,
  zone: String,
  specificity: String,
  availability: String,
  dateSignUp: Date,
  logicalDelete: Boolean,
  cuid: { type: 'String', required: true }
});


export default mongoose.model('patientRequest', patientRequestSchema);
