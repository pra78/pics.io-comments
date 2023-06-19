import { createSlice } from "@reduxjs/toolkit";
import { getAllComments } from "./commentsOperations";

const initialState = {
  isLoading: false,
  error: null,
  comments: [],
  userInput: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, { payload }) {
      return { ...state, ...payload };
    },
    deleteComment(state, { payload }) {
      const index = state.comments.findIndex(
        (comment) => comment.id === payload.id
      );
      state.comments.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllComments.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(getAllComments.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { addComment, deleteCommennt } = commentsSlice.actions;
export default commentsSlice.reducer;
