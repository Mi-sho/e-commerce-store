import { useEffect, useState } from "react"


export const usePagination = (fetchFnc, pageSize = 5) =>{
    const [currPage, setCurrPage] = useState(1);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const offset = (currPage - 1) * pageSize;

    useEffect(() => {
        const pageLoad = async () => {
            setLoading(true);


            try{
                const items = await fetchFnc(offset, pageSize);
                setData(items);
            } catch(err) {
                console.error(err.message);

            } finally{
                setLoading(false);
            }
        }
        pageLoad();
    }, [currPage])


    return{
        data,
        currPage,
        setCurrPage,
        loading
    }
}