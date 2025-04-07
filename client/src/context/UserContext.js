import { createContext } from "react";

export const UserContext = createContext({
    username: '',
    email: '',
    accessToken: '',
    _id: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});

export function useUserContext() {
    const data = useContext(UserContext);

    return data;
}