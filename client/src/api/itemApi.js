import { useNavigate } from "react-router";
import { useUserContext } from "../context/UserContext"
import fetchHelper from "../utils/fetchHelper";
import { useEffect, useState } from "react";



const baseUrl = 'http://localhost:3030/data/items'

export const useCreateItem = () => {
    const navigate = useNavigate();
    const {role, accessToken} = useUserContext();

    useEffect(() => {
        if(role !== 'admin'){
            console.log('You are not authorized to make this request!!');
            
            navigate('/')
        };
    }, [role,navigate])



    const createItem = (itemData) => {
        const options = {
            headers:{
                'X-Authorization': accessToken,
            }
        }
       return fetchHelper.post(baseUrl,itemData,options)

    }

    return { createItem: role === 'admin' ? createItem : null };
};


export const useGetAllItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchHelper.get(baseUrl)
        .then(setItems)
        .catch((err) => console.log(err.message))
    }, []);

    return { items };
};

export const useOneItem = (itemId) => {
    const [item, setItem] = useState({});

    

    useEffect(() => {
        if(!itemId) return;

        fetchHelper.get(`${baseUrl}/${itemId}`)
        .then(setItem)
        .catch((err) => console.log(err.message))
    } ,[itemId]);

    return { item };
} ;


export const useEditItem = () => {

    const navigate = useNavigate();
    const {role, accessToken} = useUserContext();

    useEffect(() => {
        if(role !== 'admin'){
            console.log(' DALI You are not authorized to make this request!!');
            
            navigate('/')
        };
    }, [role,navigate])



    const editItem = (itemId,itemData) => {
        const options = {
            headers:{
                'X-Authorization': accessToken,
            }
        }
       return fetchHelper.put(`${baseUrl}/${itemId}`, {...itemData, _id: itemId},options)

    };

    return {
        editItem,
    }
};


export const useDeleteItem = () => {
    
    const {role, accessToken} = useUserContext();

    



    const deleteItem = (itemId) => {

        if(role !== 'admin') {
            throw new Error('You are not authorized!')
        };

        
        const options = {
            headers:{
                'X-Authorization': accessToken,
            }
        }
       return fetchHelper.delete(`${baseUrl}/${itemId}`,options)

    };

    return {
        deleteItem,
    }
}


export const useGetItemsPerPage = async (offset = 0,pageSize = 5) => {
    try{
        const data = await fetchHelper.get(`${baseUrl}?offset=${offset}&pageSize=${pageSize}`)
       return data;
    }catch(err) {
        console.error(`Pagination fetch error: ${err.message}`);
        return [];
    }
}

export const useGetNewestItems = async (offset = 0,pageSize = 20) => {

    const searchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize,
        offset,
        select: '_id,item-image,tittle,itemPrice'
    })
    try{
        const data = await fetchHelper.get(`${baseUrl}?${searchParams.toString()}`)
       return data;
    }catch(err) {
        console.error(`Pagination fetch error: ${err.message}`);
        return [];
    }
}