import express from "express";
import { CreateBook, DeleteBook, 
    FetchAllBooks, GetOneBook, 
    UpdateBook } from "../controllers/bookCon.js";

export const bookRt = express();
    bookRt.post("/", CreateBook);
    bookRt.get("/", FetchAllBooks);
    bookRt.get("/:id", GetOneBook);
    bookRt.put("/:id", UpdateBook);
    bookRt.delete("/:id", DeleteBook);




