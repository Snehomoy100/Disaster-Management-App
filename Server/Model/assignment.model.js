import mongoose from 'mongoose';
import nanoid from 'nanoid';

// Location schema for the user
const GeoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'point',
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
  },
});

const AssignmentSchema = new mongoose.Schema(
  {
    area: GeoSchema,
    status: {
      type: String,
      enum: ['UPCOMING', 'COMPLETED', 'ASSIGNED'],
      default: 'UPCOMING',
    },
    image: {
      type: String,
    },
    hash: {
      type: String,
    },
  },
  { timestamps: true }
);

AssignmentSchema.pre('save', function (next) {
  this.hash = nanoid();
});

const Assignment = mongoose.model('Assignment', AssignmentSchema);
export default Assignment;
