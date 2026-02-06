import axios from "axios";
import type { LoginRequest, LoginResponse } from "./authTypes";

const BASE_URL = "https://dummyjson.com";

export async function loginApi(payload: LoginRequest): Promise<LoginResponse> {
  const res = await axios.post<LoginResponse>(
    `${BASE_URL}/auth/login`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    },
  );
  return res.data;
}
