import { Link } from 'react-router'
import styles from './LatestArticlePosts.module.css'

export default function LatestArticlePosts() {
    return(
        <>
        <div className={styles["blog-cards-wrapper"]}>
        <div className={styles["latest-posts-heading-wrapper"]}>
        <h2 className={styles["latest-articles-title"]}>Latest articles</h2>
        <Link to="/blog" className={styles["view-all-articles"]}>View all articles</Link>
        </div>
        <div className={styles["blog-cards"]}>
            <div className={styles["blog-card"]}>
              <img src="/tempPics/IMG_20241112_131110.jpg" alt="" className={styles["blog-image"]}/>  
              <div className={styles["blog-content"]}>
                <h2 className={styles["blog-title"]}>Da IMa neshto</h2>
                <p className={styles["blog-date"]}>12.12.1222</p>
                <p className={styles["blog-description"]}>lorem</p>
                <Link to="/blog/1/details" className={styles["read-more"]}>Read full article</Link>
              </div>
            </div>
            <div className={styles["blog-card"]}>
              <img src="/tempPics/pexels-duynod-31306500.jpg" alt="" className={styles["blog-image"]}/>  
              <div className={styles["blog-content"]}>
                <h2 className={styles["blog-title"]}>Da IMa neshto</h2>
                <p className={styles["blog-date"]}>12.12.1222</p>
                <p className={styles["blog-description"]}>loremr12rh812rhhwgfoaihfoawhfoiqwhfoqhwfoqhwfoqhwfoiiqhfq2222222</p>
                <Link to="" className={styles["read-more"]}>Read full article</Link>
              </div>
            </div>
            <div className={styles["blog-card"]}>
              <img src="/tempPics/gabriella-clare-marino-O5JtGuNCI6k-unsplash.jpg" alt="" className={styles["blog-image"]}/>  
              <div className={styles["blog-content"]}>
                <h2 className={styles["blog-title"]}>Da IMa neshtoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
                <p className={styles["blog-date"]}>12.12.1222</p>
                <p className={styles["blog-description"]}>lorem</p>
                <Link to="" className={styles["read-more"]}>Read full article</Link>
              </div>
            </div>
        </div>
        </div>

        </>
    )
}