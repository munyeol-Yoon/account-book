import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountBook: JSON.parse(localStorage.getItem("accountBook")) || [],
};

const accountBookSlice = createSlice({
  name: "accountBook",
  initialState,
  reducers: {
    setAccountBook: (state, action) => {
      state.accountBook = action.payload;
      localStorage.setItem("accountBook", JSON.stringify(state.accountBook));
    },
    addAccountEntry: (state, action) => {
      state.accountBook.push(action.payload);
      localStorage.setItem("accountBook", JSON.stringify(state.accountBook));
    },
  },
});

export const { setAccountBook, addAccountEntry } = accountBookSlice.actions;
export default accountBookSlice.reducer;
