import express from 'express';
import placementControllers from '../controllers/placementController.js';
const app = express();
const router = express.Router();

router.get('/placement',placementControllers.showPlacementPage);

export default router;