import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";


// Thunk: Register User

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await api.post("/register/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


// Thunk: Login User

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await api.post("/login/", formData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


// Thunk: Get All Users

export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async ({ id, user_type }, { rejectWithValue }) => {
    try {
      const response = await api.post("/users/all-users/", {
        id,
        user_type,
        action: "get_all_users",
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


// Initial State

const initialState = {
  users: [],
  user: null,
  userId: null,
  status: "idle",
  success: false,
  message: "",
  error: null,
};


// Slice

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.status = "idle";
      state.success = false;
      state.error = null;
      state.user = null;
      state.userId = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // ----- Register -----
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload?.data || null;
        state.success = action.payload?.success || false;
        state.message = action.payload?.message || "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || action.payload;
        state.success = false;
      })

      // ----- Login -----
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload?.data || null;
        state.userId = action.payload?.data?.user_id || null;
        state.success = action.payload?.success || false;
        state.message = action.payload?.message || "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || action.payload;
        state.success = false;
      })

      // ----- Get Users -----
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload?.data || [];
        state.message = action.payload?.message || "";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || action.payload;
      });
  },
});


// Exports

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
