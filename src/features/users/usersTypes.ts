export type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  image: string;
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
