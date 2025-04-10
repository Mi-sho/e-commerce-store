import { useNavigate } from "react-router";
import { useUserContext } from "../context/userContext";
import fetchHelper from "../utils/fetchHelper";
import { useEffect, useState } from "react";

const baseUrl = 'http://localhost:3030/data/orders';


export const usePlaceOrder =  () => {
    const navigate = useNavigate();

    const {accessToken } = useUserContext();

    useEffect(() => {
        if(!accessToken){
            alert('You are not authorized for this!')

            navigate('/');
        }
    }, [accessToken,navigate])
     
    
    const orderItem = (orderData) => {
        const options = {
            headers:{
                'X-Authorization': accessToken,
            }
        }
        return fetchHelper.post(baseUrl,orderData,options);
       
    }

    return{ orderItem }
    
};


export const useGetUserOrders = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {accessToken } = useUserContext();

    useEffect(() => {
        

        if(!accessToken){
            alert('You are not authorized for this!')

            navigate('/');
        }
    }, [accessToken,navigate]);

    const getOrders = (userId) => {
        setIsLoading(true);


        try{

            return fetchHelper.get(`${baseUrl}?userId=${userId}&sortBy=_createdOn desc`)
        } catch(err) {
            return(`Failed to load orders. Please try again later!`)
            
        } finally{
            setIsLoading(false);
        }
    };

    return { getOrders };
}