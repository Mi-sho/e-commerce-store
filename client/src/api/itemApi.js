import { useNavigate } from "react-router";
import { useUserContext } from "../context/userContext"
import fetchHelper from "../utils/fetchHelper";
import { useEffect } from "react";



const baseUrl = 'http://localhost:3030/data/items'

export const useCreateItem = () => {
    const navigate = useNavigate();
    const {role, accessToken} = useUserContext();

    useEffect(() => {

        if(role !== 'admin'){
            // alert('You are not authorized to make this request!!')
            // throw new Error('You are not authorized to make this request!!')
            console.log('You are not authorized to make this request!!');
            
            navigate('/login')
        };
    }, [role,navigate])



    const createItem = (gameData) => {
        const options = {
            headers:{
                'X-Authorization': accessToken,
            }
        }
       return fetchHelper.post(baseUrl,gameData,options)

    }

    return { createItem: role === 'admin' ? createItem : null };
}