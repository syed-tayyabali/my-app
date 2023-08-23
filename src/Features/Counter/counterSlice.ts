import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  counterValue: number;
  counterName: string;
  selectedTheme: "light" | "dark";
}

const initialState: counterState = {
  counterValue: 0,
  counterName: "",
  selectedTheme: "dark",
};

// REDUCER
const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.selectedTheme = state.selectedTheme === "light" ? "dark" : "light";
    },
    setCounterName: (state, { payload }: { payload: string }) => {
      state.counterName = payload;
    },
    handleIncCounter: (state, { payload }: { payload: number }) => {
      if (state.counterValue < 15)
        state.counterValue = state.counterValue + payload;
    },
    handleDecCounter: (state, { payload }: { payload: number }) => {
      if (state.counterValue > 0)
        state.counterValue = state.counterValue - payload;
    },
  },
});

export const {
  handleIncCounter,
  setCounterName,
  handleDecCounter,
  toggleTheme,
} = CounterSlice.actions;
export default CounterSlice.reducer;
