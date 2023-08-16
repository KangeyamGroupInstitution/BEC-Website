import express from "express";
import serveProfilePages from "../controllers/profileController.js";

const router = express.Router();

router.get('/profiles', serveProfilePages.serveProfiles);
router.get('/profile/:id', serveProfilePages.serveProfile);
export default router;
