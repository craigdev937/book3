import React from "react";
import Loader from "react-loader-spinner";
import { useParams, useHistory } from "react-router-dom";
import { Form } from "../components/Form";
import { useQuery, useMutation } from "react-query";
import { getOneBook, updateBook } from "../global/FetchAPI";
import { IBook } from "../models/IBook";

export const Update = (): JSX.Element => {
    const { id }: any = useParams();
    const history = useHistory();    

    const { error, isError, isLoading, data } = 
        useQuery<IBook, Error>(["book", {id}], getOneBook);

    const { mutateAsync, isLoading: isMutating } = 
        useMutation(updateBook);

    const onFormSubmit = async (data: IBook) => {
        await mutateAsync({...data, id});
        history.push("/");
    };

    if (isLoading) <Loader type="ThreeDots" color="#ccc" />
    if (isError) return <span>{error}</span>

    return (
        <React.Fragment>
            <Form 
                onFormSubmit={onFormSubmit} 
                isLoading={isMutating}
                defaultValues={data} 
            />            
        </React.Fragment>
    );
};





