import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User, UsersResponse } from "./usersTypes";
import { fetchUsersApi } from "./usersApi";

type UsersState = {
  items: User[];
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
};

const initialState: UsersState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk<
  UsersResponse,
  void,
  { rejectValue: string }
>("users/fetchUsers", async (_, { rejectWithValue }) => {
  try {
    return await fetchUsersApi();
  } catch (err: any) {
    return rejectWithValue(err.message || "Failed to fetch users");
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<UsersResponse>) => {
          state.status = "success";
          state.items = action.payload.users;
        },
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Error";
      });
  },
});

export default usersSlice.reducer;
