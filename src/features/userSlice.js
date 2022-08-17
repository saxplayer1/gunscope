import { createSlice } from "@reduxjs/toolkit"
import {gun} from "../pages/AuthPage";

export const userSlice = createSlice({
    name:"user",
    initialState: {
        user: gun
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            gun.get(action.payload.name).put({
                user: {
                    "name": action.payload.name,
                    "password": action.payload.password
                }
            })

            gun.get(action.payload.name + "/user").on((data, key) => {
                console.log(data);
                console.log(key);
            })
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const {login, logout} = userSlice.actions;

export const selectuser = (state) => state.user.user;

export default userSlice.reducer;