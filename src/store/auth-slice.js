import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, gebruikerInfo: {} },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.gebruikerInfo = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.gebruikerInfo = {};
      localStorage.removeItem("gebruikerInfo");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
