
import { Link } from 'react-router';
import { useGetAllItems, useGetItemsPerPage } from '../../api/itemApi';

import styles from './Catalog.module.css';
import useSortAndFilter from '../../hooks/useSortandFilter';
import { usePagination } from '../../hooks/usePagination';
import { addItemToCart } from '../../api/cartApi';
import { useUserContext } from '../../context/userContext';
import useAuth from '../../hooks/useAuth';

  export default function Catalog() {
    const { username} = useUserContext();
    
    
    const { sortOption,
        sortOptionChoiceHandler,
        categoryOption,
        filterCategoryOptionsHandler,
        priceOption,
        filterPriceOptionsHandler,
        inputSearch,
        searchInputHandler,
        fireSearch,
        loading,
         data: filteredData
        } = useSortAndFilter();

        const {
            data,
            currPage,
            setCurrPage
        } = usePagination(useGetItemsPerPage, 5);

        
        const filteredPaginatedData = filteredData.slice((currPage - 1) * 5, currPage * 5)


         const addToCartClickHandler = (itemId) => {
                 addItemToCart(itemId);
            };

    return (
      <>
        <div className={styles["page-wrapper"]}>
                <div className={styles["container-search-sort-items"]}>
                      <span>
                      <input 
                        type="text" 
                        className={styles["search-items-bar"]} 
                        placeholder="Search..." 
                        name="search-items"
                        value={inputSearch}
                        onChange={searchInputHandler}
                      />
                      <button className="search-items-btn" onClick={fireSearch}>Search</button>
                      </span>

                        <select
                            name="sortItemsBy"
                            id="sortItemsBy"
                            className={styles["sort-items"]}
                            value={sortOption}
                            onChange={sortOptionChoiceHandler}
                        >
                          <option value="" >Sort by...</option>
                          <option value='_createdOn desc'>Newest</option>
                          <option value='_createdOn'>Oldest</option>
                          <option value='itemPrice desc'>Price: highest first</option>
                          <option value='itemPrice'>Price: lowest first </option>

                      </select>

                      <select 
                        name="filterByCategory" 
                        id="filterByCategory" 
                        className={styles["sort-items"]} 
                        value={categoryOption}
                        onChange={filterCategoryOptionsHandler}
                      >
                          <option value="" >Filter by category</option>
                          <option value='Paintings'>Paintings</option>
                          <option value='Furnitures'>Furnitures</option>
                          <option value='Jewellery'>Jewellery</option>
                          <option value='Sculptures'>Sculptures</option>
                          <option value='Prints'>Prints</option>
                          <option value='Watches'>Watches</option>
                      </select>

                      <select 
                        name="filterByPrice" 
                        id="filterByPrice" 
                        className={styles["sort-items"]} 
                        value={priceOption}
                        onChange={filterPriceOptionsHandler}
                      >
                          <option value="" >Filter by price</option>
                          <option value='0-150'>$ 0-150</option>
                          <option value='150-700'>$ 150-700</option>
                          <option value='700-2500'>$ 700-2500</option>
                          <option value='2500+'>$ 2500+</option>


                      </select>
                 </div>
        
        
      <div className={styles["catalog-container"]}>
        {filteredPaginatedData.length > 0
        ? filteredPaginatedData.map(item => <div key={item._id} className={styles["catalog-card-item"]}>
            <div className={styles["item-image-wrapper"]}>
                <img src={item["item-image"]} alt={item.tittle} className={styles['catalog-item-image']}/>
                
            </div>
            <div className={styles["title-description-wrapper"]}>
                <h3 className={styles["item-title"]}>{item.tittle}</h3>
                <p className={styles["item-description"]}>{item["item-summary"]}</p>
                <p className={styles['item-price']}>${item.itemPrice}</p>
            </div>
            <div className={styles['details-buy-btns']}>
                <Link to={`/catalog/${item._id}/details`} className={styles["item-details-tag"]}>Details</Link>
                <button className={styles['fav-item']} ><i className={false ? "fa-solid fa-heart" :"fa-regular fa-heart"}></i></button>
               {username && <button onClick={() => addToCartClickHandler(item._id)} className={styles["item-buy-btn"]}>Buy</button>}
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
            disabled={filteredPaginatedData.length < 5}
            >
            Next
          </button>
        </div>
        :  null}
      </div>
      </>
    )
  }