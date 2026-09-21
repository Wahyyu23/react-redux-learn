import { createSlice } from "@reduxjs/toolkit";

type LoanState = {
  quantity: number;
};

const initialState: LoanState = {
  quantity: 0,
};

const loanSlice = createSlice({
  name: "loan",

  initialState,

  reducers: {
    addTool: (state) => {
      if (state.quantity < 3) {
        state.quantity += 1;
      }
    },


    resetLoan: (state) => {
      state.quantity = 0;
    },
  },
});

export const { addTool, resetLoan } = loanSlice.actions;

export default loanSlice.reducer;
