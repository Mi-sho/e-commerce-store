import { use, useEffect, useState } from "react"
import fetchHelper from "../utils/fetchHelper";

const baseUrl = 'http://localhost:3030/data/items'

const filterCategories = {
Paintings: JSON.stringify('Paintings'),
Furnitures: JSON.stringify('Furnitures'),
Jewellery: JSON.stringify('Jewellery'),
Sculptures: JSON.stringify('Sculptures'),
Prints: JSON.stringify('Prints'),
Watches: JSON.stringify('Watches'),
}

const useSortAndFilter = (initialSortOption = '') => {
    const [ sortOption, setSortOption ] = useState(initialSortOption);
    const [categoryOption, setCategoryOption] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const sortOptionChoiceHandler = (e) =>{
        setSortOption(e.currentTarget.value);
    };

    const filterCategoryOptionsHandler = (e) => {
        setCategoryOption(e.currentTarget.value)
    };

    

    useEffect(() => {

        const getData = async() => {

          

            setLoading(true);
        

            const qParams = new URLSearchParams();
            const buildFilter = [];

            if(categoryOption){
                buildFilter.push(`itemCategory=${filterCategories[categoryOption]}`)
            }

            if(sortOption){
                qParams.append('sortBy', sortOption);
            };
            

            if(buildFilter.length > 0 ) {
                qParams.append('where', buildFilter.join(''))
            }
            
            
                try{
                     const result = await fetchHelper.get(`${baseUrl}?${qParams}`)

                     setData(result);
                }catch(err) {
                    alert(err.message)
                } finally{
                    setLoading(false)
                };

        }
        getData();

    }, [sortOption,categoryOption]);


    return{
        sortOption,
        sortOptionChoiceHandler,
        categoryOption,
        filterCategoryOptionsHandler,
        data
    }

};

export default useSortAndFilter;