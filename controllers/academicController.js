import express from "express";
import path from 'path';
import url from "url";
class academicControllers {

    static showProgramsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','academics','programs.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }

    static showCalendarPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','academics', 'calender.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showScholarshipsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','academics', 'Scholarships.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    
    static showLibraryPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','academics', 'Library.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }

    static showCsePage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'CSE.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }

    static showEeePage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'EEE.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showEcePage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'ECE.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showMbaPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'MBA.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showMechPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'Mech.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showAidsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'AI & DS.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showShPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 's&h.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showCivilEngineeringPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','Department', 'Civil.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
}

export default academicControllers;