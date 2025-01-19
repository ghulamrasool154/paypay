import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
  value: null,
};

const codeConfirmation = createSlice({
  name: "codeConfirmation",
  initialState: initialState,
  reducers: {
    isCloseModel: (state, action) => {
      state.isOpened = false;
    },
    isOpenedModel: (state, action) => {
      state.isOpened = true;
    },
  },
});

export const { isCloseModel, isOpenedModel } = codeConfirmation.actions;
export default codeConfirmation.reducer;
