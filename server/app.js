import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import newsRouter from "./routes/new.routes.js";

const app = express();

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


export default app;