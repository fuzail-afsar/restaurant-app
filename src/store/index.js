import { configureStore } from "@reduxjs/toolkit";
import AdminItemSlice from "./reducers/Admin/Item.reducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminItem: AdminItemSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
