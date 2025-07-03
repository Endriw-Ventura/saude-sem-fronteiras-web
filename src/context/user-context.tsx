"use client";

import { LoggedUser } from "@/types/logged-user";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { userService } from "@/service/service-user";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const userInfo = await userService.getLoggedUser();
        if (userInfo) {
          setLoggedUser(userInfo);
        }
      } catch {
        console.log("Usuário não autenticado");
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Carregando aplicação...</p>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};
