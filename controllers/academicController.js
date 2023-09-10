import express from "express";
import path from 'path';
import url from "url";
class academicControllers {

    static showProgramsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','academics','programs.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }

    static showCalendarPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','academics', 'calendar.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showScholarshipsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','academics', 'Scholarships.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    
    static showLibraryPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','academics', 'Library.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }

    static showCsePage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'CSE.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }

    static showEeePage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'EEE.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showEcePage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'ECE.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showMbaPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'MBA.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showMechPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'Mech.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showAidsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','department', 'aids.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showShPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 's&h.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showCivilEngineeringPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'Civil.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
}

export default academicControllers;