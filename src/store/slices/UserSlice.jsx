import {createSlice} from "@reduxjs/toolkit";
import { clearAllUser } from "../actions";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) { 
            state.push(action.payload);
            // console.log(action.payload);
        },
        removeUser(state, action) { 
            state.splice(action.payload,1);//it removes only one data at a time
        },
        // clearAllUser(state, action) {
        //     return [];
        //  }
    },
    // //extrareducer concept
    // extraReducers(builder){
    //     builder.addCase(userSlice.actions.clearUser,()=>{
    //         return [];
    //     })
    // }

    //




    //when clearUser is not present inside userSlice then extrreducer not use 
    extraReducers(builder){
        builder.addCase(clearAllUser,()=>{
            return [];
        })
    }
});
export default userSlice.reducer;

export const {addUser,removeUser,clearUser}=userSlice.actions;   //userslice.action gives adduser,removeUSer,deleteUSer function