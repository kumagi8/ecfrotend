import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    date: "2023-01-01",
    grossAmount: 150.0,
    items: [
      { id: "a1", title: "Product A", quantity: 2, price: 50.0 },
      { id: "b1", title: "Product B", quantity: 1, price: 50.0 },
    ],
  },
  {
    id: "2",
    date: "2023-02-15",
    grossAmount: 200.0,
    items: [
      { id: "c1", title: "Product C", quantity: 1, price: 100.0 },
      { id: "d1", title: "Product D", quantity: 2, price: 50.0 },
    ],
  },
];
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action) {
      const order = action.payload;
      state.unshift(order);
    },
  },
});
export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
