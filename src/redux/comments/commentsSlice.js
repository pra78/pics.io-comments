import { createSlice } from "@reduxjs/toolkit";
import { getAllComments } from "./commentsOperations";

const initialState = {
  isLoading: false,
  error: null,
  comments: [],
  userInput: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, { payload }) {
      state.comments.push(payload);
    },
    deleteComment(state, { payload }) {
      const index = state.comments.findIndex(
        (comment) => comment.id === payload
      );
      state.comments.splice(index, 1);
    },
    updateUserInput(state, { payload }) {
      state.userInput = payload;
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

export const { addComment, deleteComment, updateUserInput } =
  commentsSlice.actions;
export default commentsSlice.reducer;
