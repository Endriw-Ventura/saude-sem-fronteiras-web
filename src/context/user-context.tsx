'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface User {
    name: string
}

interface ProviderProps {
    children: ReactNode
}

interface UserContextProps {
  loggedUser: User | null;
  setUser: Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextProps | null>(null);
export const UserProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<User | null>(null)

    return (
        <UserContext.Provider value={{ loggedUser: user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}


