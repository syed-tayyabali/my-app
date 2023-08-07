import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  counterValue: number;
  counterName: string;
}

const initialState: counterState = {
  counterValue: 0,
  counterName: "",
};

// REDUCER
const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
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

export const { handleIncCounter, setCounterName, handleDecCounter } =
  CounterSlice.actions;
export default CounterSlice.reducer;
