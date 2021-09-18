import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
      maxLength: 10,
    },
    password: {
      type: String,
      required: [true, 'Your password cannot be blank'],
    },
    adhaarNumber: {
      type: String,
      required: true,
      maxlength: 12,
      minlength: 12,
      required: [true, 'Your aadhar cannot be blank'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    geometry: GeoSchema,
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.methods.matchPassword = async function (enteredPassword) {
  let isValidPassword = await bcrypt.compare(enteredPassword, this.password);
  return isValidPassword;
};

UserSchema.pre('save', async function (next) {
  // in case of updates, don't hash password if not modified
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', UserSchema);
export default User;
