import { Link } from 'react-router'
import styles from './LatestArticlePosts.module.css'
import { useEffect, useState } from 'react'
import { useGetNewestArticles } from '../../../api/blogApi';

export default function LatestArticlePosts() {
  const [articles, setArticles ] = useState([]);

  useEffect(() => {

    const getArticles = async () =>{
      
      try{
       const articlesFromFetch = await useGetNewestArticles();
       setArticles(articlesFromFetch)
      }catch(err) {
        return alert(err.message);
      }
    }
    getArticles();
  }, [])
 
    return(
        <>
        <div className={styles["blog-cards-wrapper"]}>
        <div className={styles["latest-posts-heading-wrapper"]}>
        <h2 className={styles["latest-articles-title"]}>Latest articles</h2>
        <Link to="/blog" className={styles["view-all-articles"]}>View all articles</Link>
        </div>
        <div className={styles["blog-cards"]}>
          {articles.map((article) => 
            <div key={article._id} className={styles["blog-card"]}>
              <img src={article['article-image']} alt="" className={styles["blog-image"]}/>  
              <div className={styles["blog-content"]}>
                <h2 className={styles["blog-title"]}>{article.tittle}</h2>
                <p className={styles["blog-date"]}>{article['article-date']}</p>
                <p className={styles["blog-description"]}>{article['article-description']}</p>
                <Link to={`blog/${article._id}/details`} className={styles["read-more"]}>Read full article</Link>
              </div>
            </div>
            )}
        </div>
        </div>

        </>
    )
}