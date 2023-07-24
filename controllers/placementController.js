import express from "express";
import path from 'path';
import url from "url";
class placementControllers {

    static showPlacementPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','placement','placement.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }

}

export default placementControllers;