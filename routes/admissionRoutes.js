import express from 'express';
import admissionControllers from '../controllers/admissionController.js';
import authenticate from "../controllers/authControllers.js";
const app = express();
const router = express.Router();

router.get('/admission', admissionControllers.showAdmissionForm);
router.get('/admissionLogin', admissionControllers.showAdmissionLogin);
router.get('/admissionPage1', admissionControllers.showAdmissionForm1);
router.get('/admissionPage2', admissionControllers.showAdmissionForm2);
router.get('/admissionPage3', admissionControllers.showAdmissionForm3);

export default router;