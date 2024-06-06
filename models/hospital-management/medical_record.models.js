import mongoose from 'mongoose';

const recordSchem = new mongoose.Schema({}, { timestamps: true });

export const MedicalRecord = mongoose.model('MedicalRecord', recordSchem);
