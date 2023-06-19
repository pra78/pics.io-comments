import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCommentsApi } from "service/api";

export const getAllComments = createAsyncThunk(
  "comments/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getCommentsApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
