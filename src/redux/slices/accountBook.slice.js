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
    updateAccount: (state, action) => {
      const index = state.accountBook.findIndex(
        (item) => item.accountId === action.payload.accountId
      );
      if (index !== -1) {
        state.accountBook[index] = action.payload;
        localStorage.setItem("accountBook", JSON.stringify(state.accountBook));
      }
    },
    deleteAccount: (state, action) => {
      state.accountBook = state.accountBook.filter(
        (item) => item.accountId !== action.payload
      );
      localStorage.setItem("accountBook", JSON.stringify(state.accountBook));
    },
  },
});

export const { setAccountBook, addAccountEntry, updateAccount, deleteAccount } =
  accountBookSlice.actions;
export default accountBookSlice.reducer;
