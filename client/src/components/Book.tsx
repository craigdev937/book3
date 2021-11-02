import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useQueryClient, useMutation } from "react-query";
import { deleteBook } from "../global/FetchAPI";
import { IBook } from "../models/IBook";

export const Book = 
({ id, title, author, age, info }: IBook): JSX.Element => {
    const queClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(deleteBook);

    const removeBook = async () => {
        await mutateAsync(id);
        queClient.invalidateQueries("books");
    };

    return (
        <React.Fragment>
            <Link to={`/update/${id}`}>{title}</Link>
                <main key={id} className="container">
                <p>{author}</p>
                    <p>age: {age}</p>
                    <p>{info}</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </main>
            <button 
                onClick={removeBook}>
                    { isLoading ? 
                        <Loader 
                            type="ThreeDots" 
                            color="#fff" 
                        /> : "Remove" }
            </button>
        </React.Fragment>
    );
};




