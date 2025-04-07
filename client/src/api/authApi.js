import fetchHelper from "../utils/fetchHelper";

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
}