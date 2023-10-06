import express from "express";
import path from "path";
import url from "url";
import cookieparser from 'cookie-parser';
import connectDB from "./db/connectDB.js";
import homeRoutes from "./routes/homeRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import academicRoutes from "./routes/academicRoutes.js";
import placementRoutes from "./routes/placementRoute.js";
import profileRoutes from "./routes/profileRoutes.js";
import otherRoutes from "./routes/otherRoutes.js";
import authRoutes from "./routes/authRoutes.js";
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/accountDB";

const app = express();

//Database Connection
connectDB(DATABASE_URL);

//Parses the cookie
app.use(cookieparser());
//
app.use(express.urlencoded({ extended: true }));

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

//Use public to serve css and js
app.use(express.static(path.join(process.cwd(), "public")));

//EJS Template Engine
app.set("view engine", "ejs");

//Routes
app.use("/", homeRoutes);
app.use("/about", aboutRoutes);
app.use("/", admissionRoutes);
app.use("/academics", academicRoutes);
app.use("/", placementRoutes);
app.use("/", profileRoutes);
app.use('/research', otherRoutes);
app.use("/auth", authRoutes);
app.use("/aggregation", otherRoutes);
app.use("/campus", otherRoutes);

 
//Server Listening
app.listen("3004", () => {
  console.log("Server Connected Successfully");
});
