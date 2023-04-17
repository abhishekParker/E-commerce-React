import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  username: null,
};

const authSlice = createSlice({
  name: "userAuth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      const index = state.user.indexOf("@");
      state.username = state.user.slice(0, index);
    },
    logout: (state) => {
      state.user = null;
      state.username = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
