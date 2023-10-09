import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: true,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    activateModal() {
      console.log('hello');
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
