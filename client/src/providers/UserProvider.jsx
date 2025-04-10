
import { clearCartStorageOnLogout } from "../api/cartApi";
import { UserContext } from "../context/UserContext";
import { useLocalStorage } from "../hooks/useLocalStorage";



export default function UserProvider({
    children,
}) {
    const [authData, setAuthData] = useLocalStorage('auth', {});


    const userLoginHandler = (data) => {
        setAuthData(data)
    };


    const userLogoutHandler = () => {
        setAuthData(null);
        clearCartStorageOnLogout();
    };

    return(
        <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
            {children}
        </UserContext.Provider>
    )
};