import { Router } from "express";
import { createNews, deleteNews, getNew, getNews, updateNews } from "../controllers/new.controller.js";

const newsRouter = Router()

newsRouter.get("/news",getNews)
newsRouter.get("/news/:id",getNew)
newsRouter.post("/news/",createNews)
newsRouter.put("/news/:id", updateNews)
newsRouter.delete("/news/:id", deleteNews)

export default newsRouter;

