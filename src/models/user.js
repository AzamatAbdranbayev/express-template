import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    passport: {
      address: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      phone: { type: String, required: true, unique: true },
      telegram: { type: String, required: true, unique: true },
    },
    fullName: {
      type: String,
      required: true,
      unique: true,
    },
    birthDay: {
      type: Date,
      required: true,
    },
    employmentDate: {
      type: Date,
      required: true,
    },
    department: {
      type: String,
      enum: ['finance', 'development', 'sales'],
    },
    jobTitle: {
      type: String,
      enum: ['director', 'senior', 'middle', 'junior', 'cto'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('useraa', schema);
