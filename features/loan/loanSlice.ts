import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

    addToolByAmmount: (state, action: PayloadAction<number>) => {
      const amount = action.payload;

      if (amount > 0 && state.quantity + amount <= 3) {
        state.quantity += amount;
      }
    },

    resetLoan: (state) => {
      state.quantity = 0;
    },
  },
});

export const { addTool, resetLoan,addToolByAmmount   } = loanSlice.actions;

export default loanSlice.reducer;
