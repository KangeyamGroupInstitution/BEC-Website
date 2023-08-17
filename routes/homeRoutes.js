import express from 'express';
import homeControllers from '../controllers/homeController.js';
const app = express();
const router = express.Router();

router.get('/', homeControllers.showLandingPage);

router.get('/home', homeControllers.showHomePage);

export default router;