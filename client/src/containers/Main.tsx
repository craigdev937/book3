import React from "react";
import Loader from "react-loader-spinner";
import { Book } from "../components/Book";
import { useQuery } from "react-query";
import { fetchAllBooks } from "../global/FetchAPI";

export const Main = (): JSX.Element => {
    const { error, isLoading, isError, data } = 
    useQuery("books", fetchAllBooks);

    if (isLoading) <Loader type="ThreeDots" color="#ccc" />;
    if (isError) <span>Error: {error}</span>;

    return (
        <React.Fragment>
            {data?.map((book) => (
                <Book 
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    age={book.age}
                    info={book.info}
                />
            ))}
        </React.Fragment>
    );
};




