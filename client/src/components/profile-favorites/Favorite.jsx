import styles from './Favorite.module.css'

import { Link } from 'react-router'

export default function Favorite() {
    return(
        <>
        <div className={styles['favorite-wrapper']}>

            <h2 className={styles['favorite-heading']}>Favorites</h2>

         <div className={styles["favorite-container"]}>
        <div className={styles["favorite-card-item"]}>
            <div className={styles["favorite-item-image-wrapper"]}>
                <img src="/tempPics/mcgill-library-y4PqRPqSako-unsplash.jpg" alt="" className={styles['favorite-item-image']}/>
                
            </div>
            <div className={styles["favorite-title-description-wrapper"]}>
                <h3 className={styles["favorite-item-title"]}>1</h3>
                <p className={styles["favorite-item-description"]}>BAchkaq qko vurti strelkataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p className={styles['favorite-item-price']}>$344</p>
            </div>
            <div className={styles['favorite-details-buy-btns']}>
                <Link to="/catalog/1/details" className={styles["favorite-item-details-tag"]}>Details</Link>
                <button className={styles['favorite-fav-item']} ><i className={true ? "fa-solid fa-heart" :"fa-regular fa-heart"}></i></button>
                <button className={styles["favorite-item-buy-btn"]}>Buy</button>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}