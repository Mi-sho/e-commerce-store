import { useNavigate } from 'react-router';
import styles from './WriteEditArticle.module.css';
import { useWriteArticle } from '../../../api/blogApi';


export default function WriteEditArticle({tittle}) {
        const navigate = useNavigate();
        const { writeArticle } = useWriteArticle();
        
        const writeArticleHandler = async (formData) => {
            const articleData = Object.fromEntries(formData);

            try{
                await writeArticle(articleData);
                navigate('/blog')
            }catch(err) {
                console.log(err.message);
                
            }
        };
    
        return(
            <>
            <div className={styles["write-edit-container"]}>
                    <div className={styles['write-heading']}>
                        <h2 className="write-edit-heading">{tittle} article</h2>
                    </div>
            
                 <div className={styles["write-edit-form-wrapper"]}>
                                <form action={writeArticleHandler} className={styles["write-edit-form"]}>

                                    <div className={styles["article-tittle"]}>
                                    <label htmlFor="tittle">Tittle</label>
                                    <input type="text" id="tittle" name="tittle" required/>
                                    </div>      
            
            
                                    <div className={styles["article-author"]}>
                                    <label htmlFor="article-author">Author</label>
                                    <input type="text" id="article-author" name="article-author" required/>
                                    </div>
            
                                    <div className={styles["article-image"]}>
                                    <label htmlFor="article-image">Image</label>
                                    <input type="text" id="article-image" name="article-image"  required/>
                                    </div>

                                    <div className={styles["article-image-caption"]}>
                                    <label htmlFor="article-image-caption">Image caption</label>
                                    <input type="text" id="article-image-caption" name="article-image-caption"/>
                                    </div>
            
            
                                    <div className={styles["article-description"]}>
                                    <label htmlFor="article-description">Description</label>
                                    <textarea type="text" id="article-description" name="article-description" required/>
                                    </div>
            
                                    <div className={styles["article-date"]}>
                                    <label htmlFor="article-date">Date</label>
                                    <input type="text" id="article-date" name="article-date"/>
                                    </div>
            
                                    <button type='submit' className={styles['write-edit-sbm-btn']}>{tittle} article</button>
                                </form>
                            </div>
                            </div>
            </>
        )
}