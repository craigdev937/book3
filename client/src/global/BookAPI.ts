import { IBook } from "../types/IBook";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api";
export const BookAPI = createApi({
    reducerPath: "BookAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        fetchAll: builder.query<IBook[], void>({
            query: () => "/",
            providesTags: (result) => result ?
            [...result.map(({ id }) => 
                ({ type: "Books" as const, id: id })),
                { type: "Books", id: "LIST" },
            ] : [{ type: "Books", id: "LIST" }],
        }),
        getOne: builder.query<IBook, number>({
            query: (id) => `${id}`,
            providesTags: (result, error, id) => 
                [{ type: "Books", id: id }],
        }),
        add: builder.mutation<IBook, IBook>({
            query: (book) => {
                return {
                    url: `/`,
                    method: "POST",
                    body: book,
                }
            },
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),
        edit: builder.mutation<IBook, IBook>({
            query: ({ id, ...book }) => ({
                url: `/${id}`,
                method: "PUT",
                body: book,
            }),
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),
        delete: builder.mutation<IBook, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),
    }),
});





