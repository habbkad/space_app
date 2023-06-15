import { createSlice } from "@reduxjs/toolkit";

const apiDataSlice = createSlice({
  name: "data",
  initialState: {
    crew: ["jajhshj"],
  },
  reducers: {
    addToCrew: (state, action) => {
      state.crew = [...action.payload];
    },
  },
});

export const { addToCrew } = apiDataSlice.actions;

export default apiDataSlice.reducer;
