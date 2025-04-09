import { Link } from "react-router";
import { useAllArticles } from "../../api/blogApi";
import useSortAndFilter from "../../hooks/useSortandFilter"
import styles from "./Blog.module.css"

const baseUrl = 'http://localhost:3030/data/articles'

export default function Blog() {

    const {sortOption, sortOptionChoiceHandler,data} = useSortAndFilter(baseUrl);

    return(
        <> 
            <div className={styles["container"]}>
                <h2 className={styles["blog-heading-title"]}>Dive deep into the art world with our blog section!</h2>
                <div className={styles["container-search-sort"]}>
                    <span>
                    <input type="text" className={styles["search-blog-bar"]} placeholder="Search..." name="search-blog"/>
                    <button className="search-blogs-btn">Search</button>
                    </span>
                    <select 
                        name="sortBlogsBy" 
                        id="sortBlogsBy" 
                        className={styles["sort-blogs"]}
                        value={sortOption}
                        onChange={sortOptionChoiceHandler}
                    >
                        <option value='_createdOn desc'>Newest</option>
                        <option value='_createdOn'>Oldest</option>
                    </select>
                </div>
                <div className={styles["content-table"]}>
                    
                       
                        {data.length > 0
                         ? data.map(article => <div key={article._id} className={styles["blog-article-card"]}>
                            <a href="/blogs/blogId/details">
                                <img src={article["article-image"]} alt={article.tittle} className={styles["blog-article-image"]}/>  
                            </a>
                            <div className={styles["blog-article-content"]}>
                                <h2 className={styles["blog-article-title"]}>{article.tittle}</h2>
                                 <p className={styles["blog-article-date"]}>{article["article-date"]}</p>
                                 <p className={styles["blog-article-description"]}>{article["article-description"]}</p>
                                 <Link to={`/blog/${article._id}/details`} className={styles["read-article-more"]}>Read full article</Link>
                            </div>
                        </div>)
                        : <div className={styles["cat-heading"]}>
                                    <h2 className={styles["no-items"]}>NO ITEMS LISTED YES FOR THE MOMENT</h2>
                                    </div>
                        }
                        {/* <div className={styles["blog-article-card"]}>
                                <img src="/tempPics/eric-park-QbX8A8eHfzw-unsplash.jpg" alt="" className={styles["blog-article-image"]}/>  
                            <div className={styles["blog-article-content"]}>
                                <h2 className={styles["blog-article-title"]}>Da IMa neshtoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
                                 <p className={styles["blog-article-date"]}>12.12.1222</p>
                                 <p className={styles["blog-article-description"]}>lorem</p>
                                 <a href="" className={styles["read-article-more"]}>Read full article</a>
                            </div>
                        </div>
                        <div className={styles["blog-article-card"]}>
                                <img src="/tempPics/gabriella-clare-marino-O5JtGuNCI6k-unsplash.jpg" alt="" className={styles["blog-article-image"]}/>  
                            <div className={styles["blog-article-content"]}>
                                <h2 className={styles["blog-article-title"]}>Da IMa neshtoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
                                 <p className={styles["blog-article-date"]}>12.12.1222</p>
                                 <p className={styles["blog-article-description"]}>lorem</p>
                                 <a href="" className={styles["read-article-more"]}>Read full article</a>
                            </div>
                        </div> */}
                        {/* <div className={styles["blog-article-card"]}>
                                <img src="/tempPics/alexandre-valdivia-8hILOCKw5yA-unsplash.jpg" alt="" className={styles["blog-article-image"]}/>  
                            <div className={styles["blog-article-content"]}>
                                <h2 className={styles["blog-article-title"]}>Da IMa neshtoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
                                 <p className={styles["blog-article-date"]}>12.12.1222</p>
                                 <p className={styles["blog-article-description"]}>lorem</p>
                                 <a href="" className={styles["read-article-more"]}>Read full article</a>
                            </div>
                        </div> */}
                   
                </div>
            </div>
        </>
    )
}