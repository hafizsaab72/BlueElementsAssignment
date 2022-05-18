import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articles";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
