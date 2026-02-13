import axios from "axios";
import type { UsersResponse } from "./usersTypes";

export const fetchUsersApi = async (): Promise<UsersResponse> => {
  const response = await axios.get("https://dummyjson.com/users?limit=30");
  return response.data;
};
