import { useNavigate } from "react-router";
import { useUserContext } from "../context/userContext"
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
  fetchHelper.get(`${baseUrl}/${articleId}`)
  .then(setArticle)
  .catch(err => alert(err.message))
  }, [articleId] )
 
  return {
    article,
  }
}
