import styles from "./Blog.module.css"

export default function Blog() {

    return(
        <> 
            <div className={styles["container"]}>
                <h2 className={styles["blog-heading-title"]}>Dive deep into the art world with our blog section!</h2>
                <div className={styles["container-search-sort"]}>
                    <span>
                    <input type="text" className={styles["search-blog-bar"]} placeholder="Search..." name="search-blog"/>
                    <button className="search-blogs-btn">Search</button>
                    </span>
                    <select name="sortBlogsBy" id="sortBlogsBy" className={styles["sort-blogs"]}>
                        <option value='created_at_desc'>Newest</option>
                        <option value='created_at_asc'>Oldest</option>
                    </select>
                </div>
                <div className={styles["content-table"]}>
                    
                       

                         <div className={styles["blog-article-card"]}>
                            <a href="/blogs/blogId/details">
                                <img src="/tempPics/imad-alassiry-GeqhIp6D84s-unsplash.jpg" alt="" className={styles["blog-article-image"]}/>  
                            </a>
                            <div className={styles["blog-article-content"]}>
                                <h2 className={styles["blog-article-title"]}>Da IMa neshtoaaaaaaaaaaaaaaaaaaaaaaas1er2112r124214124aaaaaaaaaaaaa</h2>
                                 <p className={styles["blog-article-date"]}>12.12.1222</p>
                                 <p className={styles["blog-article-description"]}> EDIN DEN E VUZMOJNO DA NAPRAVQ NQKVI NESHTA KOI ZNAEIIEwwwsss</p>
                                 <a href="/blogs/blogId/details" className={styles["read-article-more"]}>Read full article</a>
                            </div>
                        </div>
                        <div className={styles["blog-article-card"]}>
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
                        </div>
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