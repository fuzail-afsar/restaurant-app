import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signinUser = createAsyncThunk(
  "user/signin",
  async (email, password) => {
    // Signin Functionality
  }
);

export const createUser = createAsyncThunk(
  "user/create",
  async (email, password) => {
    // Create User Functionality
  }
);

export const logoutUser = createAsyncThunk("user/logout", async (email) => {
  // Logout Functionality
});

const initialState = {
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    // Login User
    addCase(signinUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(signinUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(signinUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });

    // Create User
    addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Logout User
    addCase(logoutUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(logoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });
    addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
