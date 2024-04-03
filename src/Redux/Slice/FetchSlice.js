import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"

const initialState= {
    data: [],
    isLoading: false,
    isError: false
}

export const fetchingApi= createAsyncThunk('apiCall/fetchingApi', 
    async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        return response.json();
    }
)

const apiSlice= createSlice({
    name: 'apiCall',
    initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(fetchingApi.pending, (state)=>{
            state.isLoading= true
            })
            .addCase(fetchingApi.fulfilled, (state, action)=>{
                state.isLoading= false;
                state.data= action.payload
            })
            .addCase(fetchingApi.rejected, (state, action)=>{
                state.isError= true;
                console.log('ERROR', action.payload)
            })
    }
})

export default apiSlice.reducer;
export const getApiSelector= createSelector(state=> state,state=>state.api)