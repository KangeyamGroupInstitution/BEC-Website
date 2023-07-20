import express from "express";
import path from 'path';
import url from "url";
class aboutControllers {

    static showBECPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about','bec.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showManagementPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'management.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showCEOPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'ceo.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showPrincipalPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'principle.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    
    static showAntiRagingPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'antiraging.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }

    static showMonitoringPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'monitoring.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }

    static showInternalPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'internel.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showCodeOfConductPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'conduct.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
    static showEthicsPage = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(__dirname,'..','views','about', 'ethics.html');
        console.log(viewsPath);
        res.sendFile(viewsPath);
    }
}

export default aboutControllers;