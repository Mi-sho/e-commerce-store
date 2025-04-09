import { use, useEffect, useState } from "react"
import fetchHelper from "../utils/fetchHelper";

const baseUrl = 'http://localhost:3030/data/items'

const useSortAndFilter = (initialSortOption = '') => {
    const [ sortOption, setSortOption ] = useState(initialSortOption);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const sortOptionChoiceHandler = (e) =>{
        setSortOption(e.currentTarget.value);
    };

    useEffect(() => {

        const getData = async() => {

            setLoading(true);
        

             try{
                  const qParams = new URLSearchParams();

                    if(sortOption){
                        qParams.append('sortBy', sortOption);
                     };

                     const result = await fetchHelper.get(`${baseUrl}?${qParams}`)

                     setData(result);
                }catch(err) {
                    alert(err.message)
                } finally{
                    setLoading(false)
                };

        }
        getData();

    }, [sortOption]);


    return{
        sortOption,
        sortOptionChoiceHandler,
        data
    }

};

export default useSortAndFilter;