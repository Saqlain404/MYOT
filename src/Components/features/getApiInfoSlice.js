import { createSlice } from "@reduxjs/toolkit";

export const getApiInfo = createSlice({
  name: "getApiInfo",
  initialState: {
    type: "",
  },
  reducers: {
    getType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { getType } = getApiInfo.actions;
export default getApiInfo.reducer;
