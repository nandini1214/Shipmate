// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../auth/api";

// // Thunk to register a store
// export const registerUser = createAsyncThunk(
//   "User/registerUser",
//   async ({ formData }, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/register/", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || err.message);
//     }
//   }
// );

// // Thunk to fetch all users by type
// export const getUsers = createAsyncThunk(
//   "users/getUsers",
//   async ({ id, user_type }, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/users/all-users/", {
//         id,
//         user_type,
//         action: "get_all_users",
//       });
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || err.message);
//     }
//   }
// );

// const signupSlice = createSlice({
//   name: "signup",
//   initialState: {
//     users: [],
//     user: null,
//     status: "idle",
//     success: false,
//     message: "",
//     error: null,
//   },
//   reducers: {
//     resetUserState: (state) => {
//       state.status = "idle";
//       state.success = false;
//       state.error = null;
//       state.user = null;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Register user
//       .addCase(registerUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload?.data;
//         state.success = action.payload?.success || false;
//         state.message = action.payload?.message || "";
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload?.error;
//         state.success = false;
//       })

//       // Get users
//       .addCase(getUsers.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getUsers.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.users = action.payload?.data || [];
//         state.message = action.payload?.message || "";
//       })
//       .addCase(getUsers.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload?.error || action.payload;
//       });
//   },
// });

// export const { resetUserState } = signupSlice.actions;
// export default signupSlice.reducer;
