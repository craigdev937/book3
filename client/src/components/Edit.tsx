import React from "react";
import { Link, useNavigate, LinkProps, useResolvedPath, useMatch } from "react-router-dom";
import { BookAPI } from "../global/BookAPI";

export const Edit = ({ to }: LinkProps): JSX.Element => {
    const navigate = useNavigate();
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    const bookID = match?.params.id;
    const [book, setBook] = React.useState({
        id: bookID, title: "", author: "", age: 0, info: ""
    });

    const { data: bookData, 
        isSuccess: bookDataReady } = 
            BookAPI.useGetOneQuery(bookID!);

    const [deleteBook, {
        isLoading: isDeleting, isSuccess: isDeleted
    }] = BookAPI.useDeleteMutation();

    const [editBook, {
        isLoading: isUpdating, isSuccess: isSaved
    }] = BookAPI.useEditMutation();

    React.useEffect(() => {
        if (bookDataReady) {
            setBook(bookData!);
        }
    }, [bookData, bookDataReady]);

    function goBack(time: number) {
        setTimeout(() => {
            navigate("/");
        }, time);
    };

    const removeBook = () => {
        deleteBook(bookID!);
        goBack(700);
    };
    
    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setBook({...book, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await editBook(book);
        setBook({ 
            id: bookID, title: "", author: "", 
            age: 0, info: ""
        });
        goBack(700);
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
                <footer>
                    <button><Link to="/">Cancel</Link></button>
                    <button 
                        onClick={removeBook}
                        >{isDeleting ? "Deleting..." : "Delete"}
                    </button>
                    <button 
                        type="submit"
                        >{isUpdating ? "Updating..." : "Update"}
                    </button>
                </footer>
                {isDeleted && (
                    <aside>Book Deleted. redirecting...</aside>
                )}
                {isSaved && (
                    <aside>Book saved. redirecting...</aside>
                )}
            </form>
        </React.Fragment>
    );
};




