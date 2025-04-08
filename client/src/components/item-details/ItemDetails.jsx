import { useNavigate, useParams } from 'react-router'
import { useDeleteItem, useOneItem } from '../../api/itemApi'
import { useUserContext } from '../../context/userContext';
import { Link } from 'react-router';

import styles from './ItemDetails.module.css'
import { useState } from 'react';
import { useCart } from '../../api/cartApi';



export default function ItemDetails() {
    const navigate = useNavigate();
    const { role, username } = useUserContext();
    const {itemId} = useParams();
    const { item } = useOneItem(itemId);
    const { deleteItem } = useDeleteItem();
    const { addToCart } = useCart();


    const [isLoading, setIsLoading] = useState (false);
    const isAdmin = role === 'admin';
    const isLogged = username !== undefined;
    

    const itemDeleteHandler = async () => {
        const isConfirmed = confirm(`Do you really want to delete this item: ${item.tittle}?`);

        if(!isConfirmed){
            return;
        }

        try{
            setIsLoading(true)
            await deleteItem(itemId);
            navigate('/catalog')
        }catch(err){
            alert(err.message)
        }finally{
            setIsLoading(false)
        }

    };


    const addToCartClickHandler = async () => {
        try{
            await addToCart(item);
            alert('Item has been added to cart! :)')
        }catch(err) {
            alert('Something went wrong: ' + err.message)
        }
    } 



    

    return(
    <>
    <div className={styles["whole-wrapper"]}>

     <div className={styles["container-v1"]}>
            <div className={styles["image-section-v1"]}>
                <img src={item["item-image"]} alt={item.tittle}/>
            </div>
            <div className={styles["details-section-v1"]}>
                <h1>{item.tittle}</h1>
                <div className={styles["category-v1"]}>Category: {item["item-category"]}</div>
                <div className={styles["condition-v1"]}>Condition: {item["item-condition"]}</div>
                <div className={styles["maker-v1"]}>Maker: {item["item-maker"]}</div>
                <p className={styles["description-v1"]}>{item["item-description"]}</p>
                <div className={styles["price-v1"]}>Price: ${item["item-price"]}</div>
                {isAdmin 
                ? <div className={styles["buttons-v1"]}>
                    <button><Link to={`/admin/${itemId}/edit`}>Edit</Link></button>
                    <button onClick={itemDeleteHandler} disabled={isLoading}>Delete</button>
                </div>
                : isLogged 
                    ? <div className={styles["buttons-v1"]}>
                    <button onClick={addToCartClickHandler}>Add to Cart</button>
                    <button>Add to Wishlist</button>
                        </div>
                  : ''
                }
            </div>
        </div>
    </div>
    </>
    )
}