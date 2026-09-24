import loanReducer, {
  addTool,
  addToolByAmmount,
  resetLoan,
} from "@/features/loan/loanSlice";

let state = loanReducer(undefined, {
  type: "@@INIT",
});

console.log("Initial:", state);

state = loanReducer(state, addToolByAmmount(2));

console.log("After addToolByAmmount(2):", state);

state = loanReducer(state, addTool());

console.log("After addTool():", state);

state = loanReducer(state, resetLoan());

console.log("After resetLoan():", state);

state = loanReducer(state, addToolByAmmount(1.5));

console.log("After addToolByAmmount(1.5):", state);

