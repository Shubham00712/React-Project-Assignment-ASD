import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: window.localStorage.getItem("userData")? JSON.parse(window.localStorage.getItem("userData")): {
        id: "",
        name: "",
        email: "",
        phone: "",
        address: ""
    },
    reducers: {
        saveUser: (state, action) => {
            state = action.payload
            window.localStorage.setItem("userData", JSON.stringify(action.payload));
            return state
        }
    }
})

export const {saveUser} =userSlice.actions;
export default userSlice.reducer;