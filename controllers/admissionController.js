import express from "express";
import path from 'path';
import url from "url";

class admissionControllers {
    static showAdmissionForm = (req, res)=> {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','admission','admission.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showAdmissionForm1 = (req, res)=> {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','admission','admissionPage1.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showAdmissionForm2 = (req, res)=> {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','admission','admissionPage2.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showAdmissionForm3 = (req, res)=> {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','admission','admissionPage3.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showAdmissionLogin = (req, res)=> {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','admission','admissionLogin.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    

}

export default admissionControllers;