"use client";

import { LoggedUser } from "@/types/logged-user";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  loggedUser: LoggedUser | null;
  setLoggedUser: Dispatch<SetStateAction<LoggedUser | null>>;
}

export const UserContext = createContext<UserContextProps | null>(null);
export const UserProvider = ({ children }: ProviderProps) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};
