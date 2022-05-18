import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: null,
    visible: null,
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { setArticles, setVisible } = articlesSlice.actions;

export default articlesSlice.reducer;
