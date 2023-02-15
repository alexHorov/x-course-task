import { useContext, createContext } from 'react';

const UserContext = createContext(null);

export const UserProvider = UserContext.Provider;

export const useUserInfo = () => useContext(UserContext);
