import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    orderType: {
      type: String,
      trim: true,
      required: true,
    },
    comment: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('orders', orderSchema);
