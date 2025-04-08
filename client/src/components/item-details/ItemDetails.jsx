import { useParams } from 'react-router'
import { useOneItem } from '../../api/itemApi'
import { useUserContext } from '../../context/userContext';
import { Link } from 'react-router';

import styles from './ItemDetails.module.css'



export default function ItemDetails() {
    const { role, username } = useUserContext();
    const {itemId} = useParams();
    const { item } = useOneItem(itemId);

    const isAdmin = role === 'admin';
    const isLogged = username !== undefined;
    

    

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
                    <button>Delete</button>
                </div>
                : isLogged ?<div className={styles["buttons-v1"]}>
                    <button>Add to Cart</button>
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