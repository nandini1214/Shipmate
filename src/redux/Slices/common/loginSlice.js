// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../auth/api";

// // Thunk to log in a user
// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async ({ formData }, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/login/", formData);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || err.message);
//     }
//   }
// );

// // Thunk to fetch all users by type
// export const getUsers = createAsyncThunk(
//   "user/getUsers",
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

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     users: [],
//     user: null,
//     status: "idle",
//     success: false,
//     message: "",
//     error: null,
//     userId: null,
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
//       // Login user
//       .addCase(loginUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload?.data;
//         state.success = action.payload?.success || false;
//         state.userId = action.payload?.data?.user_id;
//         console.log(action.payload);
//         state.message = action.payload?.message || "";
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload?.error || action.payload;
//         state.success = false;
//       })

//       // Get users
//       .addCase(getUsers.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
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

// export const { resetUserState } = userSlice.actions;
// export default userSlice.reducer;
