import { useUserContext } from "../context/userContext";
import fetchHelper from "../utils/fetchHelper";


const baseUrl = 'http://localhost:3030/data/cart';


export const useCart = () => {
    const {accessToken, _id: userId } = useUserContext();

    const addToCart = (item) => {
        const cartItem = {
            itemId: item._id,
            userId,
            tittle: item.tittle,
            image: item["item-image"],
            price: item["item-price"]
        };


        return fetchHelper.post(baseUrl, cartItem, {
            headers:{ 'X-Authorization': accessToken }
        });


    };



    return {
        addToCart,
        
    }
}