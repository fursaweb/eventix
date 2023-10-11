import { createContext } from "react";

export interface User {
  uid: string;
  email: string;
}

const defaultUser = {
  uid: "",
  email: "",
};

export const UserContext = createContext<User | null>(defaultUser);
