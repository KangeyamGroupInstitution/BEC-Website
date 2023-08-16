import express from "express";
import admissionControllers from "../controllers/admissionController.js";
import authenticate from "../controllers/authControllers.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./uploads`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const app = express();
const router = express.Router();

router.get("/admission", admissionControllers.showAdmissionForm);
router.get("/admissionLogin", admissionControllers.showAdmissionLogin);
router.get("/admissionPage1", admissionControllers.showAdmissionForm1);
router.post("/admissionPage1", admissionControllers.postData1);
router.get("/admissionPage2/:id", admissionControllers.showAdmissionForm2);
router.post(
  "/admissionPage2/:id",
  upload.fields([{ name: "profilePhoto" }, { name: "hscMarksheet" }, {name: 'incomeCertificate'}, {name: 'sslcMarksheet'}]),
  admissionControllers.postData2
);
router.get("/admissionPage3/:id", admissionControllers.showAdmissionForm3);
router.post("/admissionPage3/:id", admissionControllers.postData3);

export default router;
