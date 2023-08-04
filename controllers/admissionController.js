import express from "express";
import AccountModel from "../models/Account.js";
import path from "path";
import url from "url";

var cookieData = false; //Initally the session is false.

class admissionControllers {
  static showAdmissionForm = (req, res) => {
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
    if (cookieData == false) {
      cookieData = true;
      res.send(
        "<h1>since, you are a new user your session is undefined please visit</h1> <a href='/auth/login'>Login</a>"
      );
    }

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
  static showAdmissionForm2 = (req, res) => {
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
