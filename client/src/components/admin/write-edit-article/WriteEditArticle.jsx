import { useNavigate, useParams } from 'react-router';
import { useEditArticle, useOneArticle, useWriteArticle } from '../../../api/blogApi';

import styles from './WriteEditArticle.module.css';

export default function WriteEditArticle({tittle}) {
        const navigate = useNavigate();
        const { writeArticle } = useWriteArticle();
        const {editArticle} = useEditArticle();
        const {articleId} = useParams();
        const { article } = useOneArticle(articleId || null)

        const isEdit = tittle === "Edit";
        
        const writeArticleHandler = async (formData) => {
            const articleData = Object.fromEntries(formData);

            try{
                await writeArticle(articleData);
                navigate('/blog')
            }catch(err) {
                console.log(err.message);
                
            }
        };

        const editArticleHandler = async (formData) => {
            const articleData = Object.fromEntries(formData);

            try{
                await editArticle(articleId,articleData);
                navigate(`/blog/${articleId}/details`)
            }catch(err) {
                alert(err.message);
            }
        }
    
        return(
            <>
            <div className={styles["write-edit-container"]}>
                    <div className={styles['write-heading']}>
                        <h2 className="write-edit-heading">{tittle} article</h2>
                    </div>
            
                 <div className={styles["write-edit-form-wrapper"]}>
                                <form action={isEdit ? editArticleHandler : writeArticleHandler} className={styles["write-edit-form"]}>

                                    <div className={styles["article-tittle"]}>
                                    <label htmlFor="tittle">Tittle</label>
                                    <input type="text" id="tittle" name="tittle" defaultValue={article?.tittle || ''} required/>
                                    </div>      
            
            
                                    <div className={styles["article-author"]}>
                                    <label htmlFor="article-author">Author</label>
                                    <input type="text" id="article-author" name="article-author" defaultValue={article?.["article-author"] || ''} required/>
                                    </div>
            
                                    <div className={styles["article-image"]}>
                                    <label htmlFor="article-image">Image</label>
                                    <input type="text" id="article-image" name="article-image" defaultValue={article?.["article-image"] || ''}  required/>
                                    </div>

                                    <div className={styles["article-image-caption"]}>
                                    <label htmlFor="article-image-caption">Image caption</label>
                                    <input type="text" id="article-image-caption" name="article-image-caption" defaultValue={article?.["article-image-caption"] || ''} required/>
                                    </div>
            
            
                                    <div className={styles["article-description"]}>
                                    <label htmlFor="article-description">Description</label>
                                    <textarea type="text" id="article-description" name="article-description" defaultValue={article?.["article-description"] || ''} required/>
                                    </div>
            
                                    <div className={styles["article-date"]}>
                                    <label htmlFor="article-date">Date</label>
                                    <input type="text" id="article-date" name="article-date" defaultValue={article?.["article-date"] || ''} required/>
                                    </div>
            
                                    <button type='submit' className={styles['write-edit-sbm-btn']}>{tittle} article</button>
                                </form>
                            </div>
                            </div>
            </>
        )
}