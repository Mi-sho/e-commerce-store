import {  useEffect, useState } from "react"
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


const filterByPrice = {
  '0-150': {min: 0, max: 150},
  '150-700': {min: 150, max: 700},  
  '700-2500': {min: 700, max: 2500},  
  '2500+': {min: 2500 }

}

const useSortAndFilter = (url,initialSortOption = '') => {
    const [ sortOption, setSortOption ] = useState(initialSortOption);
    const [categoryOption, setCategoryOption] = useState('');
    const [priceOption, setPriceOption ] = useState('');
    const [inputSearch, setInputSearch] = useState('');
    const [fetchSearch, setFetchSearch] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const sortOptionChoiceHandler = (e) =>{
        setSortOption(e.currentTarget.value);
    };

    const filterCategoryOptionsHandler = (e) => {
        setCategoryOption(e.currentTarget.value)
    };

    const filterPriceOptionsHandler = (e) => {
        setPriceOption(e.currentTarget.value)
    };

    const searchInputHandler = (e) => {
        setInputSearch(e.currentTarget.value);
    }

    const fireSearch = () => {
        setFetchSearch(inputSearch);
    }

   


    

    useEffect(() => {

        const getData = async() => {

          

            setLoading(true);
        

            const qParams = new URLSearchParams();
            const buildFilter = [];

            if(categoryOption){
                buildFilter.push(`itemCategory=${filterCategories[categoryOption]}`)
            };

            if(priceOption){
                const {min, max} = filterByPrice[priceOption];
                if(min !== undefined && max !== undefined) {
                    buildFilter.push(`itemPrice>=${min} AND itemPrice<=${max}`);
                } else if(min !== undefined) {
                    buildFilter.push(`itemPrice >= ${min}`)
                }
            }

            if(fetchSearch){
                buildFilter.push(`tittle LIKE ${JSON.stringify(fetchSearch)}`)
            }

            if(sortOption){
                qParams.append('sortBy', sortOption);
            };
            

            if(buildFilter.length > 0 ) {
                qParams.append('where', buildFilter.join(' AND '))
            }
            
            
                try{
                     const result = await fetchHelper.get(`${url ? url : baseUrl}?${qParams}`)

                     setData(result);
                }catch(err) {
                    alert(err.message)
                } finally{
                    setLoading(false)
                };

        }
        getData();

    }, [sortOption,categoryOption,priceOption,fetchSearch]);


    return{
        sortOption,
        sortOptionChoiceHandler,
        categoryOption,
        filterCategoryOptionsHandler,
        priceOption,
        filterPriceOptionsHandler,
        inputSearch,
        searchInputHandler,
        fireSearch,
        loading,
        data
    }

};

export default useSortAndFilter;