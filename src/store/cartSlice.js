import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk("products", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  data = data.map((product) => ({
    ...product,
    id: product.id + 30,
  }));
  return data;
});

export const fetchDailyData = createAsyncThunk("dailyProducts", async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
});

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
  products: [],
  homeData: [],
  mainState: {
    isLoading: true,
    isError: false,
  },
};

const cartSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addCartItem: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].quantity += action.payload.quantity;
        state.cartItems[existingItemIndex].perItemPrice =
          state.cartItems[existingItemIndex].price *
          state.cartItems[existingItemIndex].quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.totalAmount += 1;
      state.totalPrice += action.payload.price;
    },
    removeCartItem: (state, action) => {
      if (action.payload.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cartItems[existingItemIndex].quantity -= 1;
        state.cartItems[existingItemIndex].perItemPrice -=
          state.cartItems[existingItemIndex].price;
      }
      state.totalAmount -= 1;
      state.totalPrice -= action.payload.price;
    },
  },

  extraReducers: {
    [fetchProductsData.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.mainState.isLoading = false;
    },

    [fetchProductsData.pending]: (state) => {
      state.mainState.isLoading = true;
    },

    [fetchDailyData.fulfilled]: (state, { payload }) => {
      state.homeData = payload.products;
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
