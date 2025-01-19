import { configureStore } from "@reduxjs/toolkit";
import codeConfirmation from "./slices/code-confirmation";

export const makeStore = configureStore({
  reducer: {
    codeConfirmation,
  },
});
