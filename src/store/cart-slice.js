import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    // Fix totale amount zodat het automatisch brekent wordt
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id); // Check of je een match hebt
      state.totalQuantity++;
      state.totalAmount += newItem.prijs;
      state.totalAmount.toFixed(2);
      // Update later, voeg meer gegevens toe van het product wat belangrijk is om te weten bij de bestelling
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          naam: newItem.naam,
          prijs: newItem.prijs,
          quantity: 1,
          totalPrice: newItem.prijs,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.prijs;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => id === item.id);
      state.totalQuantity--;
      state.totalAmount -= existingItem.prijs;
      state.totalAmount.toFixed(2);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id); // loop over de array en return elk item dat niet matched met het gegeven id.
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.prijs;
      }
    },
    clearCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
