import { IBook } from "../models/IBook";
const URL = "http://localhost:9000/api";

export const fetchAllBooks = 
async (): Promise<IBook[]> => {
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error("Something's BAD");
    return res.json();
};

export const getOneBook =
async ({ queryKey }: any): Promise<IBook> => {
    const [_key, {id}] = queryKey;
    const res: Response = await fetch(`${URL}/${id}`);
    if (!res.ok) throw new Error("Something's BAD");
    return res.json();
};

export const createBook = 
async (book: IBook): Promise<IBook> => {
    const res: Response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ book }),
    });
    if (!res.ok) throw new Error("Something's BAD");
    return res.json();
};

export const updateBook = 
async (book: IBook): Promise<IBook> => {
    const res: Response = await fetch(`${URL}/${book.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(book),
    });
    if (!res.ok) throw new Error("Something's BAD");
    return res.json();
};

export const deleteBook =
async (id: number): Promise<IBook> => {
    const res: Response = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });
    if (!res.ok) throw new Error("Something's BAD");
    return res.json();
};





