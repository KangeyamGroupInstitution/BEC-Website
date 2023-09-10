import path from "path";
import url from "url";
import AccountModel from "../models/Account.js";
// import nodemailer from "nodemailer";

// var email;

// let testaccount = nodemailer.createTestAccount();

// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   auth: {
//     user: "diana18@ethereal.email",
//     pass: "gruwFPK17pjW7NvtUs",
//   },
// });

class authenticate {
  static userLogin = (req, res, next) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(__dirname, "..", "views", "auth", "login.ejs");
    res.render(viewsPath);
    next();
  };
  static userSignup = (req, res, next) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(__dirname, "..", "views", "auth", "signup.ejs");
    res.render(viewsPath);
    next();
  };
  static forgotPassword = (req, res, next) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(__dirname, "..", "views", "auth", "forget.ejs");
    res.render(viewsPath);
    next();
  };
  static otp = (req, res, next) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(__dirname, "..", "views", "auth", "otp.ejs");
    res.render(viewsPath);
    next();
  };
  static updatePassword = (req, res, next) => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(
      __dirname,
      "..",
      "views",
      "auth",
      "createNewPassword.ejs"
    );
    res.render(viewsPath);
    next();
  };
  static createAccount = async (req, res, next) => {
    try {
      const account = new AccountModel({
        username: req.body.username,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
      });

      await account.save();
      res.cookie(req.body.username, req.body.password),
        {
          maxAge: new Date().setHours(100),
          Domain: "localhost:3000/home",
          url: "/createAccount",
        };
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
    next();
  };

  static logUser = async (req, res, next) => {
    
    try {
      const { username, password } = req.body;
      console.log(username);
      const login = new AccountModel({
        username: username,
        password: password,
      });
      console.log(password);
      const receivedData = await AccountModel.findOne({ username: username });
      console.log(receivedData);
      if (password == receivedData.password) {
        res.cookie('username',`${username}`);
        res.cookie('password', `${receivedData.password}`);
        res.redirect("/profiles");
      } else {
        res.send("Incorrect Password...");
      }
    } catch (err) {
      console.log(err);
    }
    next();
  };

  // static sendOTP = async (req, res) => {
  //   email = req.body.email;

  //   var otp = Math.random();
  //   otp = otp * 1000000;
  //   otp = parseInt(otp);
  //   console.log(otp);
  //   console.log(req.body.email);
  //   let user = await AccountModel.findOne({ email: req.body.email });
  //   let newuser = await AccountModel.findOneAndUpdate(
  //     { _id: `${user._id}` },
  //     { otp: otp },
  //     { new: true }
  //   );
  //   console.log(newuser);
  //   // send mail with defined transport object
  //   var mailOptions = {
  //     to: req.body.email,
  //     subject: "Otp for registration is: ",
  //     html:
  //       "<h3>OTP for account verification is </h3>" +
  //       "<h1 style='font-weight:bold;'>" +
  //       otp +
  //       "</h1>", // html body
  //   };

  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       return console.log(error);
  //     }
  //     console.log("Message sent: %s", info.messageId);
  //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //   });
  //   res.redirect('/auth/otp');
  // };

  // static verifyOtp = async (req, res) => {
  //   const otp = req.body.otp;
  //   const user = await AccountModel.findOne({ username: "admin" });
  //   if (otp == user.otp) {
  //     res.redirect("/auth/create-new-password");
  //   } else {
  //     res.send("You enter wrong OTP");
  //   }
  // };

  static newPassword = async (req, res) => {
    const password = req.body.password;
    const userPassword = await AccountModel.findOneAndUpdate(
      { username: "admin" },
      { password: password},
      { new: true}
    );
    res.redirect('/home');
  };
}

export default authenticate;
