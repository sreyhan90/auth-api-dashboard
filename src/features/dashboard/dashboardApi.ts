import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export async function fetchUsersCountApi(): Promise<number> {
  const res = await axios.get(`${BASE_URL}/users?limit=0`);
  return res.data.total as number;
}

export async function fetchProductsCountApi(): Promise<number> {
  const res = await axios.get(`${BASE_URL}/products?limit=0`);
  return res.data.total as number;
}