// const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// async thunk
export const fetchProduct = createAsyncThunk('products', async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonResp = await resp.json();
    return jsonResp; // <-- json.id galat tha, jsonResp sahi hai
});

// initial state
const initialState = {
    items: [],
    status: undefined,
    error: null,
};

// slice
const productuSlice = createSlice({
    name: 'products',
    initialState,
    // reducers: {},   // <-- empty but required
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = 'successed';        // <-- ':' galat tha, '=' sahi
            state.items = action.payload;      // <-- action.items galat tha
        });
    }
});

export default productuSlice.reducer;
