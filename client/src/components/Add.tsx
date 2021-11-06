import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookAPI } from "../global/BookAPI";

export const Add = (): JSX.Element => {
    const navigate = useNavigate();
    const [addBook] = BookAPI.useAddMutation();
    const [book, setBook] = React.useState({
        id: "", title: "", author: "", 
        age: 0, info: ""
    });

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setBook({...book, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await addBook(book);
        setBook({
            id: "", title: "", author: "", 
            age: 0, info: ""
        });
        navigate("/");
    };    

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <aside>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Title"
                        value={book.title}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="author">Author</label>
                    <input 
                        type="text" 
                        name="author"
                        placeholder="Author"
                        value={book.author}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="text" 
                        name="age"
                        placeholder="Age"
                        value={book.age}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="info">Info</label>
                    <input 
                        type="text" 
                        name="info"
                        placeholder="Info"
                        value={book.info}
                        onChange={handleChange}
                    />
                </aside>
                <button><Link to="/">Cancel</Link></button>
                <button type="submit">Add Book</button>
            </form>
        </React.Fragment>
    );
};




