var mongoose = require('mongoose');

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

module.exports = mongoose.model('orders', orderSchema);
