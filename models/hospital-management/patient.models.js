import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    diagonsedWith: {
      type: String,
      requred: true,
    },
    address: {
      type: String,
      requred: true,
    },
    age: {
      type: Number,
      requred: true,
    },
    booldGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['MALE', 'FEMALE', 'OTHER'],
      required: true,
    },
    addmitIn:{
      type: mongoose.Schema.Types.ObjectId;
      ref:"Hospital"
    }
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
