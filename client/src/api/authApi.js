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
}