import express from 'express';
import academicControllers from '../controllers/academicController.js';
const app = express();
const router = express.Router();

router.get('/programs', academicControllers.showProgramsPage);
router.get('/calendar', academicControllers.showCalendarPage);
router.get('/library', academicControllers.showLibraryPage);
router.get('/scholarships', academicControllers.showScholarshipsPage);
router.get('/department/civilengineering', academicControllers.showCivilEngineeringPage);
router.get('/department/cse',academicControllers.showCsePage);
router.get('/department/eee',academicControllers.showEeePage);
router.get('/department/ece', academicControllers.showEcePage);
router.get('/department/mech', academicControllers.showMechPage);
router.get('/department/aids', academicControllers.showAidsPage);
router.get('/department/mba', academicControllers.showMbaPage);
router.get('/department/sh', academicControllers.showShPage);


export default router;