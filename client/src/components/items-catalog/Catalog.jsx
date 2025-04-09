
import { Link } from 'react-router';
import { useGetAllItems } from '../../api/itemApi';

import styles from './Catalog.module.css';
import useSortAndFilter from '../../hooks/useSortandFilter';

  export default function Catalog() {

    const { items } = useGetAllItems();
    const { sortOption,
        sortOptionChoiceHandler,
        categoryOption,
        filterCategoryOptionsHandler,
    data} = useSortAndFilter();



    return (
      <>
        <div className={styles["page-wrapper"]}>
                <div className={styles["container-search-sort-items"]}>
                      <span>
                      <input type="text" className={styles["search-items-bar"]} placeholder="Search..." name="search-items"/>
                      <button className="search-items-btn">Search</button>
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
                        name="sortItemsBy" 
                        id="sortItemsBy" 
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

                      <select name="sortItemsBy" id="sortItemsBy" className={styles["sort-items"]} defaultValue=''>
                          <option value="" >Filter by price</option>
                          <option value='0-150'>0-150</option>
                          <option value='150-700'>150-700</option>
                          <option value='700-2500'>700-2500</option>
                          <option value='2500+'>2500+</option>


                      </select>
                 </div>
        
        
      <div className={styles["catalog-container"]}>
        {data.length > 0
        ? data.map(item => <div key={item._id} className={styles["catalog-card-item"]}>
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
                <button className={styles["item-buy-btn"]}>Buy</button>
            </div>
        </div>)
        : <div className={styles["cat-heading"]}>
            <h2 className={styles["no-items"]}>NO ITEMS LISTED YES FOR THE MOMENT</h2>
            </div>
        }
        {/* <div className={styles["catalog-card-item"]}>
            <div className={styles["item-image-wrapper"]}>
                <img src="/tempPics/rio-lecatompessy-cJWJgTrFgQA-unsplash.jpg" alt="" className={styles['catalog-item-image']}/>
                
            </div>
            <div className={styles["title-description-wrapper"]}>
                <h3 className={styles["item-title"]}>CHasovniksssssssssssssssssssssssssssssssssss</h3>
                <p className={styles["item-description"]}>BAchkaq qko vurti strelkataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p className={styles['item-price']}>$344</p>
            </div>
            <div className={styles['details-buy-btns']}>
                <a href="/catalog/itemId/details" className={styles["item-details-tag"]}>Details</a>
                <button className={styles['fav-item']}><i className={true ? "fa-solid fa-heart" :"fa-regular fa-heart"}></i></button>
                <button className={styles["item-buy-btn"]}>Buy</button>
            </div>
        </div>
        <div className={styles["catalog-card-item"]}>
            <div className={styles["item-image-wrapper"]}>
                <img src="/tempPics/birmingham-museums-trust-HEEvYhNzpEo-unsplash.jpg" alt="" className={styles['catalog-item-image']}/>
                
            </div>
            <div className={styles["title-description-wrapper"]}>
                <h3 className={styles["item-title"]}>CHasovniksssssssssssssssssssssssssssssssssss</h3>
                <p className={styles["item-description"]}>BAchkaq qko vurti strelkataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p className={styles['item-price']}>$344</p>
            </div>
            <div className={styles['details-buy-btns']}>
                <a href="/catalog/itemId/details" className={styles["item-details-tag"]}>Details</a>
                <button className={styles['fav-item']}><i className="fa-regular fa-heart"></i></button>
                <button className={styles["item-buy-btn"]}>Buy</button>
            </div>
        </div>
        <div className={styles["catalog-card-item"]}>
            <div className={styles["item-image-wrapper"]}>
                <img src="/tempPics/birmingham-museums-trust-e0wBK0xJXYQ-unsplash.jpg" alt="" className={styles['catalog-item-image']}/>
                
            </div>
            <div className={styles["title-description-wrapper"]}>
                <h3 className={styles["item-title"]}>CHasovniksssssssssssssssssssssssssssssssssss</h3>
                <p className={styles["item-description"]}>BAchkaq qko vurti strelkataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p className={styles['item-price']}>$344</p>
            </div>
            <div className={styles['details-buy-btns']}>
                <a href="/catalog/itemId/details" className={styles["item-details-tag"]}>Details</a>
                <button className={styles['fav-item']}><i className="fa-regular fa-heart"></i></button>
                <button className={styles["item-buy-btn"]}>Buy</button>
            </div>
        </div>
        <div className={styles["catalog-card-item"]}>
            <div className={styles["item-image-wrapper"]}>
                <img src="/tempPics/gabriella-clare-marino-O5JtGuNCI6k-unsplash.jpg" alt="" className={styles['catalog-item-image']}/>
                
            </div>
            <div className={styles["title-description-wrapper"]}>
                <h3 className={styles["item-title"]}>CHasovniksssssssssssssssssssssssssssssssssss</h3>
                <p className={styles["item-description"]}>BAchkaq qko vurti strelkataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p className={styles['item-price']}>$344</p>
            </div>
            <div className={styles['details-buy-btns']}>
                <a href="/catalog/itemId/details" className={styles["item-details-tag"]}>Details</a>
                <button className={styles['fav-item']}><i className="fa-regular fa-heart"></i></button>
                <button className={styles["item-buy-btn"]}>Buy</button>
            </div>
        </div> */}
      
      </div>
      </div>
      </>
    )
  }