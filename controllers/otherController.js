import path from 'path';
import url from "url";
class otherController {

    static showMOUPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','research','mou.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showRDPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','research','rd.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showEDCPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','research','edc.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showIQACPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','iqac.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showSSRPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','SSR.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showCriteriaPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','criterea.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showMetricsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','DVV','metrics.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showProfilePage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','DVV','profile.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showBestPractisesPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc', 'bestPract.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showInstitutePage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','institute.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showCOCPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','codeConduct.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showCapacityPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','capacity.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showFeedbackForm = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','feedbackForms.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showGrievancesPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','grieve&Red.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showAnnualPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Aggregation','nacc','annual.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showBeyoundPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','campus','beyound.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showInfaPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','campus','infra.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showSportsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','campus','sports.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showClubPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','campus','club.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showGalleryPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','campus','galaery.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showInvitationPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','campus','invitation.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showQuickLink = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','campus','quicklink.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }


}

export default otherController;