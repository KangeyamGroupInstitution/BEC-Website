import path from "path";
import url from "url";
import AccountModel from "../models/Account.js";

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
  static createAccount = async (req, res, next) => {
    try {
      const account = new AccountModel({
        username: req.body.username,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
      });

      await account.save();
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
      const receivedData = await AccountModel.findOne({ username: username });
      if (password == receivedData.password) {
        res.redirect("/admissionPage1");
      } else {
        res.send("you have sign up failed");
      }
    } catch (err) {
      console.log(err);
    }
    next();
  };

  static forgetPassword = (req, res)=>{
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const viewsPath = path.join(__dirname, "..", "views", "auth", "forget.ejs");
    res.render(viewsPath);
  }
}

export default authenticate;
