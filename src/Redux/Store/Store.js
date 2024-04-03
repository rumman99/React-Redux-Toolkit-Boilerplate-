import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/CounterSlice";
import apiReducer from '../Slice/FetchSlice'


export const store = configureStore({
    reducer: {counter: counterReducer, api: apiReducer}
})

