import express from "express";
import path from "path";
import url from "url";

class serveProfilePages {
    static serveProfile = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const viewsPath = path.join(
            __dirname,
            "..",
            "views",
            "admission",
            "login.ejs"
          );
          console.log(viewsPath)
          res.render(viewsPath);

    }
}

export default serveProfilePages;