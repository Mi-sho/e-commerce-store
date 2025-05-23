import { useNavigate } from "react-router";
import { useUserContext } from "../context/UserContext"
import fetchHelper from "../utils/fetchHelper";
import { useEffect, useState } from "react";

const baseUrl = 'http://localhost:3030/data/articles'


export const useWriteArticle = () => {
    const navigate = useNavigate();
    const {role, accessToken} = useUserContext();

    useEffect(() => {
        if(role !== 'admin'){
            alert('You are not authorized');

            navigate('/');
        };
    }, [role,navigate])

    const writeArticle = (articleData) => {
        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }
        return fetchHelper.post(baseUrl,articleData,options)
    }

    return {
        writeArticle
    }
};


export const useAllArticles = () => {
    const [data, setArticles] = useState([])
    useEffect(() => {
        fetchHelper.get(baseUrl)
        .then(setArticles)
        .catch((err) => alert(err.message))
    }, [])

    return {
        data,
    };
};

export const useOneArticle = (articleId) => {
  const [ article , setArticle ] = useState({});

  useEffect(() => {
    if(!articleId) return;
    
  fetchHelper.get(`${baseUrl}/${articleId}`)
  .then(setArticle)
  .catch(err => alert(err.message))
  }, [articleId] )
 
  return {
    article,
  }
};

export const useEditArticle = () => {
    const navigate = useNavigate();
    const {role, accessToken} = useUserContext();

    useEffect(() => {
        if(role !== 'admin'){
            console.log(' DALI You are not authorized to make this request!!');
            
            navigate('/')
        };
    }, [role,navigate]);


     const editArticle = (articleId,articleData) => {
            const options = {
                headers:{
                    'X-Authorization': accessToken,
                }
            }
           return fetchHelper.put(`${baseUrl}/${articleId}`, {...articleData, _id: articleId},options)
    
        };

        return {
            editArticle,
        }
}


export const useDeleteArticle = () => {
    
    const {role, accessToken} = useUserContext();

    const deleteArticle = (articleId) => {
        if(role !== 'admin') {
            throw new Error ('You are not the admin');
        };

        const options = {
            headers:{
                'X-Authorization': accessToken,
            }
        }
     return fetchHelper.delete(`${baseUrl}/${articleId}`,options)
    
        };
    
        return {
            deleteArticle,
        }

};

export const useGetArticlesPerPage = async (offset = 0,pageSize = 5) => {
    try{
        const data = await fetchHelper.get(`${baseUrl}?offset=${offset}&pageSize=${pageSize}`)
       return data;
    }catch(err) {
        console.error(`Pagination fetch error: ${err.message}`);
        return [];
    }
}


export const useGetNewestArticles = async () => {

    const searchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
        select: '_id,article-image,tittle,article-date,article-description'
    })
    try{
        const data = await fetchHelper.get(`${baseUrl}?${searchParams.toString()}`)
       return data;
    }catch(err) {
        console.error(`Pagination fetch error: ${err.message}`);
        return [];
    }
}