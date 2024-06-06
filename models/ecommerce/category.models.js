import mongoose from 'mongoose';

const catergorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timeseries: true }
);

export const Category = mongoose.model('Category', catergorySchema);
