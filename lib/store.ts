import { configureStore } from "@reduxjs/toolkit";
import  loanReducer  from "@/features/loan/loanSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      loan: loanReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];