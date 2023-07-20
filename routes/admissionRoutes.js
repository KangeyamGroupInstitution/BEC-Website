import express from 'express';
import admissionControllers from '../controllers/admissionController.js';
const app = express();
const router = express.Router();

router.get('/admission', admissionControllers.showAdmissionForm);

export default router;