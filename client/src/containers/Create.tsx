import React from "react";
import { Form } from "../components/Form";
import { createBook } from "../global/FetchAPI";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { IBook } from "../models/IBook";

export const Create = (): JSX.Element => {
    const history = useHistory();
    const { mutateAsync, isLoading } = useMutation(createBook);
    const [book, setBook] = React.useState({
        title: "", author: "", age: 0, info: ""
    });

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setBook({...book, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = async (data: IBook) => {
        await mutateAsync({...data});
        history.push("/");
    };

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
                <aside>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Title"
                        value={book.title}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="text" 
                        name="author"
                        placeholder="Author"
                        value={book.author}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="text" 
                        name="age"
                        placeholder="Age"
                        value={book.age}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="text" 
                        name="info"
                        placeholder="Info"
                        value={book.info}
                        onChange={handleChange}
                    />
                </aside>
                <button type="submit">Add Book</button>
            </Form>
        </React.Fragment>
    );
};





