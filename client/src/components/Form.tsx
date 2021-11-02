import React from "react";
import Loader from "react-loader-spinner";
import { useForm, SubmitHandler } from "react-hook-form";
import { IBook } from "../models/IBook";

export const Form = 
({ onFormSubmit, isLoading }: any) => {
    const { register, handleSubmit } = 
        useForm<IBook>({});

    const onSubmit: SubmitHandler<IBook> = (data) => {
        onFormSubmit(data);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <aside>
                    <label htmlFor="title">Title</label>
                    <input {...register("title")} />
                </aside>
                <aside>
                    <label htmlFor="author">Author</label>
                    <input {...register("author")} />
                </aside>
                <aside>
                    <label htmlFor="age">Age</label>
                    <input {...register("age")} />
                </aside>
                <aside>
                    <label htmlFor="info">Info</label>
                    <input {...register("info")} />
                </aside>
                <button>
                    { isLoading ? 
                        <Loader 
                            type="ThreeDots" 
                            color="#fff" 
                        /> : 
                    "Submit" }
                </button>
            </form>
        </React.Fragment>
    );
};





