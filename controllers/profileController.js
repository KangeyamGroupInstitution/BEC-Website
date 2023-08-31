import express from "express";
import AdmissionModel from "../models/Admission.js";
import AccountModel from "../models/Account.js";
import path from "path";
import url from "url";
var logged = true;

class serveProfilePages {
  static serveProfiles = async (req, res) => {
    console.log(req.cookies.cookieData);
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    
    if(req.cookies == undefined){
      res.redirect('/auth/login');
    }
    else{
      const viewsPath = path.join(
        __dirname,
        "..",
        "views",
        "profile",
        "profiles.ejs"
      );
      const result = await AdmissionModel.find();
      console.log(result);
      res.render(viewsPath, { data: result });
    }

    
  };
  static serveProfile = async (req, res) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(
      __dirname,
      "..",
      "views",
      "profile",
      "profile.ejs"
    );
    const result = await AdmissionModel.findById(req.params.id);
    console.log(result);
    res.render(viewsPath, { data: result });
  };
}

export default serveProfilePages;
