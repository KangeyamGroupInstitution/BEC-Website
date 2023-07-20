import express from "express";
import path from 'path';
import url from "url";
class aboutControllers {

    static showBECPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about','bec.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showManagementPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'management.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showCEOPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'ceo.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showPrincipalPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'principle.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    
    static showAntiRagingPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'antiraging.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }

    static showMonitoringPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'monitoring.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }

    static showInternalPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'internel.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showCodeOfConductPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'conduct.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
    static showEthicsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'ethics.ejs');
        console.log(viewsPath);
        res.render(viewsPath);
    }
}

export default aboutControllers;