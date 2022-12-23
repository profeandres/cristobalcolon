import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import newsRouter from "./routes/new.routes.js";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(
    fileUpload({
        tempFileDir: "./upload",
        useTempFiles:true,
    })
)


//routes
app.use(newsRouter)


app.use(express.static(join(__dirname,'../client/build')));

export default app;