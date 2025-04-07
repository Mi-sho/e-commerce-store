import { UserContext } from "../context/userContext";
import { useLocalStorage } from "../hooks/useLocalStorage";



export default function UserProvider({
    children,
}) {
    const [authData, setAuthData] = useLocalStorage('auth', {});

    const userLoginHandler = (data) => {
        setAuthData(data)
    };


    const userLogoutHandler = () => {
        setAuthData({});
    };

    return(
        <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
            {children}
        </UserContext.Provider>
    )
}