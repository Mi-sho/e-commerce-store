import { Link } from "react-router";
import { useAllArticles, useGetArticlesPerPage } from "../../api/blogApi";
import useSortAndFilter from "../../hooks/useSortAndFilter"
import styles from "./Blog.module.css"
import { usePagination } from "../../hooks/usePagination";

const baseUrl = 'http://localhost:3030/data/articles'

export default function Blog() {

    const {sortOption, 
        sortOptionChoiceHandler, 
        inputSearch,
        searchInputHandler,
        fireSearch, 
        data} = useSortAndFilter(baseUrl);
   


    const {
        currPage,
        setCurrPage,
    } = usePagination(useGetArticlesPerPage, 5)

    const filteredPaginatedData = data.slice((currPage -1) * 5, currPage * 5)

    const isMoreData = currPage * 5 < data.length;
    return(
    
        <> 
            <div className={styles["container"]}>
                <h2 className={styles["blog-heading-title"]}>Dive deep into the art world with our blog section!</h2>
                <div className={styles["container-search-sort"]}>
                    <span>
                    <input 
                        type="text" 
                        className={styles["search-blog-bar"]} 
                        placeholder="Search..." 
                        name="search-blog"
                        value={inputSearch}
                        onChange={searchInputHandler}
                    />
                        
                    <button className="search-blogs-btn" onClick={fireSearch}>Search</button>
                    </span>
                    <select 
                        name="sortBlogsBy" 
                        id="sortBlogsBy" 
                        className={styles["sort-blogs"]}
                        value={sortOption}
                        onChange={sortOptionChoiceHandler}
                    >
                        <option value="" >Sort by...</option>
                        <option value='_createdOn desc'>Newest</option>
                        <option value='_createdOn'>Oldest</option>
                    </select>
                </div>
                <div className={styles["content-table"]}>
                    
                       
                        {filteredPaginatedData.length > 0
                         ? filteredPaginatedData.map(article => <div key={article._id} className={styles["blog-article-card"]}>
                            <Link to={`/blog/${article._id}/details`}>
                                <img src={article["article-image"]} alt={article.tittle} className={styles["blog-article-image"]}/>  
                            </Link>
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
                       
                </div>
                {filteredPaginatedData.length > 0 
         ?<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }} >
          <button
            onClick={() => setCurrPage((page) => Math.max(page - 1, 1))}
            disabled={currPage === 1}
            >
            Prev
          </button>
          <span>Page {currPage}</span>
          <button
            onClick={() => setCurrPage((page) => page + 1)}
            disabled={!isMoreData}
            >
            Next
          </button>
        </div>
        :  null}
            </div>
        </>
    )
}