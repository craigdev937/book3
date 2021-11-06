import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../types/IBook";

type Props = {
    book: IBook,
};
export const Info = ({ book }: Props): JSX.Element => {
    return (
        <React.Fragment>
            <h2>
                <Link to={`/edit/${book.id}`}
                    >{book.title}
                </Link>
            </h2>
            <main key={book.id}>
                <p>{book.author}</p>
                <p>{book.age}</p>
                <p>{book.info}</p>
            </main>
        </React.Fragment>
    );
};




