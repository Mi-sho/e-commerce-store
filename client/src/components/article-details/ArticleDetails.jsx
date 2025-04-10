import { Link, useNavigate, useParams } from 'react-router';
import styles from './ArticleDetails.module.css';
import { useUserContext } from '../../context/UserContext';
import { useDeleteArticle, useOneArticle } from '../../api/blogApi';
import { useState } from 'react';

export default function ArticleDetails() {
    const navigate = useNavigate();
    const {role} = useUserContext();
    const {articleId} = useParams();
    const {article} = useOneArticle(articleId);
    const [isLoading, setIsLoading] = useState(false);
    const {deleteArticle} = useDeleteArticle();
    
    
    const isAdmin = role === 'admin';
    
 const articleDeleteHandler = async () => {
    const isConfirmed = confirm(`Do you really want to delete this item: ${article.tittle}?`);

    if(!isConfirmed){
        return;
    }

    try{
        setIsLoading(true);
        await deleteArticle(articleId);
        navigate('/blog')
    }catch(err) {
        alert(err.message)
    }finally{
        setIsLoading(false);
    }
 }

    return(
        <>
       <div className={styles["article-container"]}>
    <div className={styles["article-header"]}>
        <h1 className={styles["article-title"]}>{article.tittle}</h1>
        <div className={styles["article-meta"]}>
            <span className={styles["author"]}>{article["article-author"]}</span>
            <span className={styles["date"]}>{article['article-date']}</span>
        </div>
    </div>
    <div className={styles["article-image-container"]}>
        <img 
            src={article["article-image"]}
            alt={article.tittle}
            className={styles["article-image"]}
        />
        <p className={styles["image-caption"]}>{article["article-image-caption"]}</p>
    </div>
    <div className={styles["article-content"]}>
        <p>
           {article["article-description"]}
        </p>
    </div>
    {isAdmin?
    <div className={styles["article-button"]}>
        <button className={styles["like-button"]}><Link to={`/admin/${articleId}/edit-article`}>Edit</Link></button>
        <button className={styles["like-button"]} onClick={articleDeleteHandler} disabled={isLoading}>Delete</button>
    </div>
    :null
    }
</div>
        </>
    )
}