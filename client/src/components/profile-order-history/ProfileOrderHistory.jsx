import styles from './ProfileOrderHistory.module.css'

export default function ProfileOrderHistory() {
    return(
        <>
        <div className={styles["cart-container"]}>

                        <h2 className={styles['cart-heading']}>My order history</h2>

                        {/* {true ? <h2>Nqmash nishto tuka </h2>
                        : Array.map(item => <OrderedItem item:item />)} */}
                       
                       <div className={styles["ordered-item-wrapper"]}>
                        <div className={styles["ordered-item-head-wrapper"]}>
                            <div className={styles["order-placed"]}>
                                <p className={styles["order-placed-tittle"]}>Order placed</p>
                                <p className={styles["order-placed-date"]}>April 5,2025</p>
                            </div>
                            <div className={styles["order-placed"]}>
                                <p className={styles["order-total-price-tittle"]}>Total price</p>
                                <p className={styles["order-total-price-num"]}>$255</p>
                            </div>
                            <div className={styles["order-placed"]}>
                                <p className={styles["order-locaton-tittle"]}>Ship to</p>
                                <p className={styles["order-locaton"]}>Munich,Germany</p>
                            </div>

                            <p className={styles["order-id"]}>Order # 12518752112</p>
                        </div>
                        <hr className={styles['order-hr']} />

                        <div className={styles["ordered-item-body-wrapper"]}>
                            <div className={styles["ordered-item-img"]}>
                                <img src="/tempPics/IMG_20241112_131110.jpg" alt="" />
                            </div>
                        <div className={styles['ordered-item-tittle']}>CHasovkin bratlence</div>
                        </div>
                        <hr className={styles['item-hr']}/>

                        <div className={styles["ordered-item-body-wrapper"]}>
                            <div className={styles["ordered-item-img"]}>
                                <img src="/tempPics/mcgill-library-y4PqRPqSako-unsplash.jpg" alt="" />
                            </div>
                        <div className={styles['ordered-item-tittle']}>CHasovkin bratlence</div>
                        </div> 
                        <hr className={styles['item-hr']}/>

                        <div className={styles["ordered-item-body-wrapper"]}>
                            <div className={styles["ordered-item-img"]}>
                                <img src="/tempPics/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg" alt="" />
                            </div>
                        <div className={styles['ordered-item-tittle']}>CHasovkin bratlence</div>
                        </div>
                       </div>
        </div>
        </>
    )
}