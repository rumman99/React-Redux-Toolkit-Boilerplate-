import { createSelector, createSlice } from "@reduxjs/toolkit"


const initialState= {
    values: 0
}

const counterSlice= createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.values +=1
        },
        decrement: state => {
            state.values -=1
        }, 
        incrementByNumber: (state, action) => {
            state.values += action.payload
        },
        decrementByNumber: (state, action) => {
            state.values -= action.payload
        }
    }
})

export default counterSlice.reducer;
export const {increment, decrement, incrementByNumber, decrementByNumber}= counterSlice.actions;

export const getItemSelector = createSelector(state=> state,state=>state.values)