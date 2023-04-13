import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        items:[],
    },
    reducers:{
        storeMovies: (state,action) =>{
            state.items = action.payload;
            console.log("state",state.items);
        },
    }
})

export const {storeMovies} = movieSlice.actions;
export default movieSlice.reducer;