import { createContext, useContext } from "react";

export const UserContext = createContext({
    username: '',
    email: '',
    accessToken: '',
    role: '',
    _id: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});

export function useUserContext() {
    const data = useContext(UserContext);

    return data;
}