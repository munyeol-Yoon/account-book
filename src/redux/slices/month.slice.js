import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMonth: null,
};

const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    setSelectedMonth(state, action) {
      state.selectedMonth = action.payload;
    },
  },
});

export const { setSelectedMonth } = monthSlice.actions;
export default monthSlice.reducer;
