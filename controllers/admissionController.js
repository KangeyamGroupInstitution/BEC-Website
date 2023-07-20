import express from "express";
import path from 'path';
import url from "url";

class admissionControllers {
    static showAdmissionForm = (req, res)=> {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','admission','admission.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
}

export default admissionControllers;