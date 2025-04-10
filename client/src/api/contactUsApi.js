import fetchHelper from "../utils/fetchHelper";
import { useUserContext } from "../context/UserContext";

const baseUrl = 'http://localhost:3030/data/contacts';


export const useContact = () => {

    const {role, accessToken} = useUserContext();

    const sendUs =  (emailData) => {
        const options = {
            headers:{
                'X-Authorization': accessToken,
            }
        }
        return result = fetchHelper.post(`${baseUrl}`,emailData,options);
        
    }

    return {
        sendUs
    }
};