import mongoose from "mongoose";
const AdmissionSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    uppercase: true,
    default: "",
  },
  parentname: {
    type: String,
    trim: true,
    uppercase: true,
    default: "",
  },
  dateofbirth: {
    type: Date,
  },
  email: {
    type: String,
    trim: true,
  },
  aadharnumber: {
    type: String,
  },
  country: {
    type: String,
    trim: true,
    uppercase: true,
  },
  state: {
    type: String,
    trim: true,
    uppercase: true,
  },
  district: {
    type: String,
    trim: true,
    uppercase: true,
  },
  address: {
    type: String,
    trim: true,
    uppercase: true,
  },
  pincode: {
    type: Number,
  },
  parentContactNumber: {
    type: Number,
  },
  studentContactNumber: {
    type: Number,
  },
  religion: {
    type: String,
    uppercase: true,
  },
  community: {
    type: String,
    trim: true,
    uppercase: true,
  },
  caste: {
    type: String,
    trim: true,
    uppercase: true,
  },
  otherCaste: {
    type: String,
    trim: true,
    uppercase: true,
  },
  registrationNumber: {
    type: String,
    require: true,
    uppercase: true,
    trim: true,
    default: "no entry",
  },
  isfirstGeneration: {
    type: Boolean,
    default: false,
  },
  physicsMarks: {
    type: Number,
    default: 0,
  },
  chemistryMarks: {
    type: Number,
    default: 0,
  },
  mathMarks: {
    type: Number,
    default: 0,
  },
  cutOffMarks: {
    type: Number,
    default: 0,
  },
  diplomaBranch: {
    type: String,
    uppercase: true,
    default: 0,
  },
  diplomaPercentage: {
    type: Number,
    default: 0,
  },
  degreeBranchName: {
    type: String,
    uppercase: true,
    default: "no entry",
  },
  degreePercentage: {
    type: Number,
    default: 0,
  },
  instituteName: {
    type: String,
    uppercase: true,
    default: "no entry",
  },
  mediumOfInstruction: {
    type: String,
    uppercase: true,
    default: "no entry",
  },
  progamName: {
    type: String,
    uppercase: true,
  },
  advertisementMedium: {
    type: String,
    uppercase: true,
  },
  otherSource: {
    type: String,
    uppercase: true,
  },
});

const AdmissionModel = new mongoose.model("admission", AdmissionSchema);

export default AdmissionModel;
