import styles from './WriteEditArticle.module.css';


export default function WriteEditArticle({tittle}) {
        return(
            <>
            <div className={styles["write-edit-container"]}>
                    <div className={styles['write-heading']}>
                        <h2 className="write-edit-heading">{tittle} article</h2>
                    </div>
            
                 <div className={styles["write-edit-form-wrapper"]}>
                                <form action="POST" className={styles["write-edit-form"]}>

                                    <div className={styles["article-tittle"]}>
                                    <label htmlFor="tittle">Tittle</label>
                                    <input type="text" id="tittle" name="tittle" required/>
                                    </div>      
            
            
                                    <div className={styles["article-summary"]}>
                                    <label htmlFor="article-summary">Summary</label>
                                    <input type="text" id="article-summary" name="article-summary" required/>
                                    </div>
            
                                    <div className={styles["article-image"]}>
                                    <label htmlFor="article-image">Image</label>
                                    <input type="text" id="article-image" name="article-image" />
                                    </div>
            
            
                                    <div className={styles["article-description"]}>
                                    <label htmlFor="article-description">Description</label>
                                    <textarea type="text" id="article-description" name="article-description" required/>
                                    </div>
            
                                    <div className={styles["article-date"]}>
                                    <label htmlFor="article-date">Date</label>
                                    <input type="number" id="article-date" name="article-date"/>
                                    </div>
            
                                    <button type='submit' className={styles['write-edit-sbm-btn']}>{tittle} article</button>
                                </form>
                            </div>
                            </div>
            </>
        )
}