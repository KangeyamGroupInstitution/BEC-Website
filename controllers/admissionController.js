import express from "express";
import AccountModel from "../models/Account.js";
import AdmissionModel from "../models/Admission.js";
import path from "path";
import url from "url";
import multer from "multer";

var cookieData = false; //Initally the session is false.

class admissionControllers {
  static showAdmissionForm = async (req, res) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

    const viewsPath = path.join(
      __dirname,
      "..",
      "views",
      "admission",
      "admission.ejs"
    );
    console.log(viewsPath);
    res.render(viewsPath);
  };
  static showAdmissionForm1 = (req, res) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(
      __dirname,
      "..",
      "views",
      "admission",
      "admissionPage1.ejs"
    );
    console.log(viewsPath);

    res.render(viewsPath);
  };
  static postData1 = async (req, res) => {
    try {
      const newAdmission = new AdmissionModel({
        fullname: req.body.fullname,
        parentname: req.body.parentname,
        dateofbirth: req.body.dateofbirth,
        email: req.body.email,
        aadharnumber: req.body.aadharnumber,
        country: req.body.country,
        state: req.body.state,
        district: req.body.district,
        address: req.body.address,
        pincode: req.body.pincode,
        parentContactNumber: req.body.parentContactNumber,
        studentContactNumber: req.body.studentContactNumber,
        religion: req.body.religion,
        community: req.body.community,
        caste: req.body.caste,
        otherCaste: req.body.otherCaste,
      });
      await newAdmission.save();
      let queryParameter = await AdmissionModel.findOne({
        fullname: req.body.fullname,
      });

      let id = queryParameter._id;
      res.redirect(`/admissionPage2/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  static showAdmissionForm2 = (req, res) => {
    console.log(req.params);
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(
      __dirname,
      "..",
      "views",
      "admission",
      "admissionPage2.ejs"
    );
    console.log(viewsPath);
    res.render(viewsPath);
  };
  static postData2 = async (req, res) => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `./uploads/${req.params.fullname}`);
      },
      filename: function (req, file, cb) {
        cb(null, `${new Date.now()}-user`);
      },
    });

    const upload = multer({ storage: storage });
    try {
      const admissionId = req.params.id; // Assuming you're using 'id' as the parameter name
      const newAdmission = await AdmissionModel.findOneAndUpdate(
        { _id: admissionId },
        {
          registrationNumber: req.body.registrationNumber,
          isfirstGeneration: req.body.isfirstGeneration,
          physicsMarks: req.body.physicsMarks,
          chemistryMarks: req.body.chemistryMarks,
          mathMarks: req.body.mathMarks,
          cutOffMarks: req.body.cutOffMarks,
          diplomaBranch: req.body.diplomaBranch,
          diplomaPercentage: req.body.diplomaPercentage,
          degreeBranchName: req.body.degreeBranchName,
          degreePercentage: req.body.degreePercentage,
          instituteName: req.body.instituteName,
          mediumOfInstruction: req.body.mediumOfInstruction,
        },
        { new: true } // This option returns the updated document
      );

      res.redirect(`/admissionPage3/${admissionId}`);
    } catch (err) {
      console.log(err);
    }
  };

  static showAdmissionForm3 = (req, res) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(
      __dirname,
      "..",
      "views",
      "admission",
      "admissionPage3.ejs"
    );
    console.log(viewsPath);
    res.render(viewsPath);
  };

  static postData3 = async (req, res) => {
    try {
      const admissionId = req.params.id; // Assuming you're using 'id' as the parameter name
      const newAdmission = await AdmissionModel.findOneAndUpdate(
        { _id: admissionId },
        {
          programName: req.body.programName,
          advertisementMedium: req.body.advertisementMedium,
          otherSource: req.body.otherSource,
        },
        { new: true } // This option returns the updated document
      );

      res.redirect(`/admission`);
    } catch (err) {
      console.log(err);
    }
  };

  static showAdmissionLogin = (req, res) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(
      __dirname,
      "..",
      "views",
      "admission",
      "admissionLogin.ejs"
    );
    console.log(viewsPath);
    res.render(viewsPath);
  };
}

export default admissionControllers;
