import styles from './ItemDetails.module.css'

export default function ItemDetails() {
    return(
    <>
    <div className={styles["whole-wrapper"]}>

     <div className={styles["container-v1"]}>
            <div className={styles["image-section-v1"]}>
                <img src="/tempPics/imad-alassiry-GeqhIp6D84s-unsplash.jpg" alt="NE"/>
            </div>
            <div className={styles["details-section-v1"]}>
                <h1>Malachite Mantel Clock</h1>
                <div className={styles["category-v1"]}>Category: Vase</div>
                <div className={styles["condition-v1"]}>Condition: Used</div>
                <div className={styles["maker-v1"]}>Maker: Unknown</div>
                <p className={styles["description-v1"]}>
                    The elegant malachite body of this impressive antique mantel clock creates a stunning visual contrast with the work’s golden gilt bronze mounts. A refined piece that exudes luxury and sophistication.
                </p>
                <div className={styles["price-v1"]}>Price: $1224.00</div>
                <div className={styles["buttons-v1"]}>
                    <button>Add to Cart</button>
                    <button>Add to Wishlist</button>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}