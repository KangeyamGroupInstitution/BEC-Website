import express from "express";
import path from 'path';
import url from "url";
class homeControllers {
    static showLandingPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,"..", "index.html");
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showHomePage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,"..", "index.html");
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }

}



export default homeControllers;