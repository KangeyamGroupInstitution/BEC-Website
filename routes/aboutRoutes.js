import express from 'express';
import aboutControllers from '../controllers/aboutController.js';
const app = express();
const router = express.Router();

router.get('/bec', aboutControllers.showBECPage);
router.get('/management', aboutControllers.showManagementPage);
router.get('/ceo', aboutControllers.showCEOPage);
router.get('/principle', aboutControllers.showPrincipalPage);
router.get('/commitee/antiraging', aboutControllers.showAntiRagingPage);
router.get('/commitee/monitoring', aboutControllers.showMonitoringPage);
router.get('/commitee/internal', aboutControllers.showInternalPage);
router.get('/policies/codeofconduct', aboutControllers.showCodeOfConductPage);
router.get('/policies/ethics', aboutControllers.showEthicsPage);

export default router;