import { useNavigate } from "react-router";
import fetchHelper from "../utils/fetchHelper";
import { useEffect, useRef } from "react";
import { useUserContext } from "../context/userContext";

const baseUrl = 'http://localhost:3030/users';


export const useRegister = () => {
    const register =  (username, email, password) => {
        const result = fetchHelper.post(`${baseUrl}/register`, {username, email, password});
        return result;
    }

    return {
        register
    }
};

export const useLogin = () =>{
    const login = (email, password) => {
        const result = fetchHelper.post(`${baseUrl}/login`, {email,password});
        return result;
    };

    return{
        login,
    }
};

export const useLogout = () => {
 const {accessToken, userLogoutHandler} = useUserContext();
 const hasLoggedOut = useRef(false)

 useEffect(() => {
    if(!accessToken || hasLoggedOut.current) return;

    hasLoggedOut.current = true;
    

    const options = {
        headers: {
            'X-Authorization': accessToken,
        },
        
        
    };

    fetchHelper.get(`${baseUrl}/logout`,options)
    .then(userLogoutHandler)
     
   
 }, [accessToken,userLogoutHandler])

     return{
        loggedOut: !!accessToken,
     }


}