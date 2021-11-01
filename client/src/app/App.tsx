import React from "react";
import "./App.css";
import { Main } from "../containers/Main";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const QClient = new QueryClient();

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <QueryClientProvider client={QClient}>
                <Main />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </React.Fragment>
    );
};




