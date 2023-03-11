import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dummyJson from "../../api/dummyJson";

export const signinUser = createAsyncThunk(
  "user/signin",
  async ({ email, password }) => {
    const result = await dummyJson.post("auth/login", {
      username: "kminchelle",
      password: "0lelplR",
    });
    return result.data.token;
  }
);

export const createUser = createAsyncThunk(
  "user/create",

  async ({ email, password }) => {
    return await dummyJson.post("users/add", {
      email,
      password,
    });
  }
);

export const logoutUser = createAsyncThunk("user/logout", async (email) => {
  // Create User Functionality
});

export const checkIsUserAuthenticated = createAsyncThunk(
  "user/isAuthenticated",
  async () => {}
);

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
      document.cookie = `token=${action.payload}; path=/; secure; SameSite=Lax`;
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

    // Check Is User Authenticated
    addCase(checkIsUserAuthenticated.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(checkIsUserAuthenticated.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(checkIsUserAuthenticated.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
