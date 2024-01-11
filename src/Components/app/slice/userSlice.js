// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    updateProfilePic(state, action) {
      state.userData = {
        ...state.userData,
        profile_Pic: action.payload,
      };
    },
    updateUserName(state, action) {
      state.userData = {
        ...state.userData,
        name: action.payload,
      };
    },
  },
});

// export const { setUserData } = userSlice.actions;
export const selectUserData = (state) => state.user.userData;
export const { setUserData, updateProfilePic, updateUserName } =
  userSlice.actions;
export default userSlice.reducer;
