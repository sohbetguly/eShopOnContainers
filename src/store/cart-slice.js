import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
  isModalActive: false,
  imageId: "",
  initialSlide: 0,
  specifications: {},
  checkedList: ["8 GB"],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const { id, title, price, image } = newItem;
      const existingItem = state.items[id];
      if (!existingItem) {
        state.totalQuantity++;
        state.totalPrice += price.toFixed(2);
        state.totalPrice = +state.totalPrice.toFixed(2);
        state.items[id] = {
          id,
          price,
          quantity: 1,
          totalPrice: +newItem.price.toFixed(2),
          title,
          image,
        };
      } else {
        existingItem.quantity++;
        state.totalPrice += newItem.price.toFixed(2);
        existingItem.totalPrice += +newItem.price.toFixed(2);
        existingItem.totalPrice = +existingItem.totalPrice.toFixed(2);
        console.log(existingItem.totalPrice);
        state.totalPrice = state.totalPrice.toFixed(2);
      }
    },

    remove(state, action) {
      const id = action.payload;
      const existingItem = state.items[id];

      if (existingItem.quantity === 1) {
        delete state.items[id];
        state.totalQuantity--;
        state.totalPrice -= existingItem.totalPrice;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalPrice -= existingItem.price;
        existingItem.totalPrice = existingItem.totalPrice.toFixed(2);
      }
      state.totalPrice = state.totalPrice.toFixed(2);
    },
    delete(state, action) {
      const id = action.payload;
      state.totalPrice -= state.items[id].totalPrice;
      delete state.items[id];
      state.totalQuantity--;
      state.totalPrice = state.totalPrice.toFixed(2);
    },
    modalHandler(state, action) {
      const { payload } = action;
      const { id, type, initialSlide } = payload;
      console.log(id);
      if (type === "add") {
        state.isModalActive = true;
        state.imageId = id;
        state.initialSlide = initialSlide;
      } else {
        state.isModalActive = false;
      }
    },
    specificationsHandler(state, action) {
      const { payload } = action;
      state.specifications = payload;
    },
  },
});

export const itemActions = itemsSlice.actions;

export default itemsSlice.reducer;
