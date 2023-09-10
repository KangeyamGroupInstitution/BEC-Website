import express from "express";
import authenticate from "../controllers/authControllers.js";

const router = express.Router();

router.get("/login", authenticate.userLogin);
router.get("/signup", authenticate.userSignup);
router.post("/signup", authenticate.createAccount);
router.post("/login", authenticate.logUser);
router.get('/forget', authenticate.forgotPassword);
router.get('/otp', authenticate.otp);
// router.post('/otp', authenticate.verifyOtp);
router.get('/create-new-password', authenticate.updatePassword);
router.post('/create-new-password', authenticate.newPassword);
router.get('/forget', authenticate.forgotPassword);
// router.post('/forget', authenticate.sendOTP);

export default router;
