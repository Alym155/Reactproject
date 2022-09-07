import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './counterSlice'
export const store = configureStore({

    reducer : {
        Counter:CounterReducer,
    }
})