import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LoginRequest, LoginResponse } from "./authTypes";
import { loginApi } from "./authApi";

type AuthStatus = "idle" | "loading" | "success" | "error";

type AuthState = {
  token: string | null;
  user: Pick<
    LoginResponse,
    "id" | "username" | "firstName" | "lastName"
  > | null;
  status: AuthStatus;
  error: string | null;
};

const storedUser = localStorage.getItem("user");

const initialState: AuthState = {
  token: localStorage.getItem("accessToken"),
  user: storedUser ? JSON.parse(storedUser) : null,
  status: "idle",
  error: null,
};

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: string }
>("auth/loginUser", async (payload, { rejectWithValue }) => {
  try {
    return await loginApi(payload);
  } catch (err: any) {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Login failed. Please try again.";
    return rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
    clearAuthError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.status = "success";
          state.token = action.payload.accessToken;
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: action.payload.id,
              username: action.payload.username,
              firstName: action.payload.firstName,
              lastName: action.payload.lastName,
            }),
          );
        },
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
