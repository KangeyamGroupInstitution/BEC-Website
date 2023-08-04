import express from "express";
import serveProfilePages from "../controllers/profileController.js";

const router = express.Router();

router.get('/profile', serveProfilePages.serveProfile);

export default router;
