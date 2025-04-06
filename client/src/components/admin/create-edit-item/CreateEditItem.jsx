import styles from './CreateEditItem.module.css'

export default function CreateEditItem({tittle}){
    return(
    <> 
    <div className={styles["create-edit-container"]}>
        <div className={styles['create-heading']}>
            <h2 className="create-edit-heading">{tittle} item</h2>
        </div>

     <div className={styles["create-edit-form-wrapper"]}>
                    <form action="POST" className={styles["create-edit-form"]}>
                        <div className={styles["item-tittle"]}>
                        <label htmlFor="tittle">Tittle</label>
                        <input type="text" id="tittle" name="tittle"/>
                        </div>      


                        <div className={styles["item-summary"]}>
                        <label htmlFor="item-summary">Summary</label>
                        <input type="text" id="item-summary" name="item-summary"/>
                        </div>

                        <div className={styles["item-image"]}>
                        <label htmlFor="item-image">Image</label>
                        <input type="text" id="item-image" name="item-image"/>
                        </div>

                        <div className={styles["item-category"]}>
                        <label htmlFor="item-category">Category</label>
                        <select type="text" id="item-category" name="item-category">
                          <option value="">Choose category</option>
                          <option value='Paintings'>Paintings</option>
                          <option value='Furnitures'>Furnitures</option>
                          <option value='Jewellery'>Jewellery</option>
                          <option value='Sculptures'>Sculptures</option>
                          <option value='Prints'>Prints</option>
                          <option value='Watches'>Watches</option>
                         </select>
                        </div>

                        <div className={styles["item-condition"]}>
                        <label htmlFor="item-condition">Condition</label>
                        <input type="text" id="item-condition" name="item-condition"/>
                        </div>

                        <div className={styles["item-maker"]}>
                        <label htmlFor="item-maker">Maker</label>
                        <input type="text" id="item-maker" name="item-maker"/>
                        </div>

                        <div className={styles["item-description"]}>
                        <label htmlFor="item-description">Description</label>
                        <textarea type="text" id="item-description" name="item-description"/>
                        </div>

                        <div className={styles["item-price"]}>
                        <label htmlFor="item-price">Price</label>
                        <input type="number" id="item-price" name="item-price"/>
                        </div>

                        <div className={styles["item-shipping-price"]}>
                        <label htmlFor="item-shipping-price">Shipping Price</label>
                        <input type="number" id="item-shipping-price" name="item-shipping-price"/>
                        </div>

                        <button type='submit' className={styles['create-edit-sbm-btn']}>{tittle} item</button>
                    </form>
                </div>
                </div>
    </>
    )
}