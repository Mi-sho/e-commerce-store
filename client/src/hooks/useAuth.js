import { useUserContext } from "../context/UserContext";

export default function useAuth() {
    const {accessToken, role} = useUserContext();

    const isAuthenticated = accessToken !== undefined;
    const isAdmin = role === 'admin'


    return {isAuthenticated, isAdmin};
}