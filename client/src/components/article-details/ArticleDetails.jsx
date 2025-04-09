import { useNavigate, useParams } from 'react-router';
import styles from './ArticleDetails.module.css';
import { useUserContext } from '../../context/userContext';
import { useOneArticle } from '../../api/blogApi';

export default function ArticleDetails() {
    const navigate = useNavigate();
    const {role,username} = useUserContext();
    const {articleId} = useParams();
    console.log(articleId);
    
    const {article} = useOneArticle(articleId);


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
    <div className={styles["article-button"]}>
        <button className={styles["like-button"]}>Like</button>
    </div>
</div>
        </>
    )
}