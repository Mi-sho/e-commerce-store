import { useUserContext } from "../context/userContext";

export default function useAuth() {
    const {accessToken} = useUserContext();

    const isAuthenticated = accessToken !== undefined;


    return {isAuthenticated};
}