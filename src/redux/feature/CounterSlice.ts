import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
  initialState: { value: 0 },
  name: 'counter',
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;

export default CounterSlice.reducer;
