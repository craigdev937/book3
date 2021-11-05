import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { BookAPI } from "./BookAPI";

export const RootReducer = configureStore({
    reducer: {
        [BookAPI.reducerPath]: BookAPI.reducer,
    },
        // gDM = getDefaultMiddleware
    middleware: (gDM) => gDM().concat(BookAPI.middleware),
});

setupListeners(RootReducer.dispatch);



