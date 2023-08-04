import mongoose from "mongoose";

const AccountSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  join: {
    type: Date,
    default: Date.now,
  },
});

const AccountModel = mongoose.model("account", AccountSchema);

export default AccountModel;
