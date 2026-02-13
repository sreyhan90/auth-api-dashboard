import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchProductsCountApi, fetchUsersCountApi } from "./dashboardApi";

type Status = "idle" | "loading" | "success" | "error";

type DashboardState = {
  usersCount: number | null;
  productsCount: number | null;
  usersStatus: Status;
  productsStatus: Status;
  usersError: string | null;
  productsError: string | null;
};

const initialState: DashboardState = {
  usersCount: null,
  productsCount: null,
  usersStatus: "idle",
  productsStatus: "idle",
  usersError: null,
  productsError: null,
};

export const fetchUsersCount = createAsyncThunk<
  number,
  void,
  { rejectValue: string }
>("dashboard/fetchUsersCount", async (_, { rejectWithValue }) => {
  try {
    return await fetchUsersCountApi();
  } catch (err: any) {
    const message =
      err?.response?.data?.message || err?.message || "Failed to load users";
    return rejectWithValue(message);
  }
});

export const fetchProductsCount = createAsyncThunk<
  number,
  void,
  { rejectValue: string }
>("dashboard/fetchProductsCount", async (_, { rejectWithValue }) => {
  try {
    return await fetchProductsCountApi();
  } catch (err: any) {
    const message =
      err?.response?.data?.message || err?.message || "Failed to load products";
    return rejectWithValue(message);
  }
});

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    resetDashboard(state) {
      state.usersCount = null;
      state.productsCount = null;
      state.usersStatus = "idle";
      state.productsStatus = "idle";
      state.usersError = null;
      state.productsError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // users
      .addCase(fetchUsersCount.pending, (state) => {
        state.usersStatus = "loading";
        state.usersError = null;
      })
      .addCase(
        fetchUsersCount.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.usersStatus = "success";
          state.usersCount = action.payload;
        },
      )
      .addCase(fetchUsersCount.rejected, (state, action) => {
        state.usersStatus = "error";
        state.usersError = action.payload || "Failed to load users";
      })

      // products
      .addCase(fetchProductsCount.pending, (state) => {
        state.productsStatus = "loading";
        state.productsError = null;
      })
      .addCase(
        fetchProductsCount.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.productsStatus = "success";
          state.productsCount = action.payload;
        },
      )
      .addCase(fetchProductsCount.rejected, (state, action) => {
        state.productsStatus = "error";
        state.productsError = action.payload || "Failed to load products";
      });
  },
});

export const { resetDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
