import React from "react";
import { useQuery } from "react-query";
import { fetchAllBooks } from "../global/FetchAPI";

export const Main = (): JSX.Element => {
    const { data } = useQuery("books", fetchAllBooks);

    return (
        <React.Fragment>
            {data?.map((book) => (
                <main key={book.id} className="container">
                    <section>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p>age: {book.age}</p>
                        <p>{book.info}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </section>
                </main>
            ))}
        </React.Fragment>
    );
};




