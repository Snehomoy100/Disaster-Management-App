import mongoose from 'mongoose';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOP', 10);

const SupplySchema = new mongoose.Schema(
  {
    productName: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: 'units',
    },
    batch: {
      type: String,
    },
  },
  { timestamps: true }
);

SupplySchema.pre('save', function (next) {
  this.batch = nanoid();
});

const Supply = mongoose.model('Supply', SupplySchema);
export default Supply;
