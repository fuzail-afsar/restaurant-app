import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import dummyJson from "../../../api/dummyJson";

export const addItem = createAsyncThunk(
  "admin/addItem",
  async ({ data }, { rejectWithValue }) => {
    try {
      const result = await dummyJson.post("admin/addItem", {
        data,
      });
      return result.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getAdminItems = createAsyncThunk(
  "admin/getAdminItems",
  async (_, { rejectWithValue }) => {
    try {
      const result = await dummyJson.get("products");
      console.log(result);
      return result.data.products;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  isLoading: false,
  data: [],
};

export const AdminItemSlice = createSlice({
  name: "AdminItem",
  initialState,
  reducers: {},
  extraReducers: ({ addCase, addMatcher }) => {
    addCase(addItem.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    addCase(getAdminItems.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });

    addMatcher(
      isAnyOf(addItem.pending, getAdminItems.pending),
      (state, { payload }) => {
        state.isLoading = true;
      }
    );
    addMatcher(
      isAnyOf(addItem.rejected, getAdminItems.rejected),
      (state, { payload }) => {
        state.isLoading = false;
      }
    );
  },
});

export default AdminItemSlice.reducer;
