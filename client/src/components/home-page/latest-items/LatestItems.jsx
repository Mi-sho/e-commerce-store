import { Link } from "react-router";
import { useGetNewestItems } from "../../../api/itemApi";
import { useEffect, useState } from "react";
import { addItemToCart } from "../../../api/cartApi";
import { useUserContext } from "../../../context/userContext";

export default function LatestItems() {
 const [allItems, setAllItems] = useState([]);
 const [currPage, setCurrPage] = useState(1);
 const {username} = useUserContext();
 
 
 useEffect(() => {
    const getItems = async () => {
      
      try{
        const items = await useGetNewestItems(0,20)
        setAllItems(items)
      } catch(err) {
        return alert(err.message);
      } 
      
    }
    getItems();
  }, []);

 const itemsPerPage = 4
 const totalItems = allItems.length
 const totalPages = Math.ceil(totalItems / itemsPerPage);

 const nextClickHandler = () => {
  if(currPage < totalPages){
    setCurrPage(currPage + 1)
  }else{
    setCurrPage(1)
  }
 };

 const prevClickHandler = () => {
  if(currPage === 1){
    setCurrPage(totalPages);
  }else {
    setCurrPage(currPage - 1);
  }
 };

 const iOfLastItem = currPage * itemsPerPage;
 const iOfFirstItem = iOfLastItem - itemsPerPage;
 const currItems = allItems.slice(iOfFirstItem,iOfLastItem);

  const addToCartClickHandler = (itemId) => {
        addItemToCart(itemId);
     };

  
    return(
        <>
        <div className="relative w-full p-6 mx-auto overflow-hidden  rounded-xl mt-3">
            <div className="flex flex-row justify-between ">
            <Link to="/catalog" className="self-center cursor-pointer underline"> View All Items</Link>
            <h2 className="p-3 pb-0 text-xl font-bold self-end order-first">Newest items</h2>
            </div>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${0 * 100}%)` }}>
        {currItems.map((item, index) => ( 
       
  <div key={index} className="sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
    <Link to={`/catalog/${item._id}/details`}>
      <img
        className="h-48 w-96 object-cover rounded-t-lg"
        src={item["item-image"]}
        alt={item.title}
      />
    </Link>
    <div className="px-5 pb-5 flex flex-col flex-grow">
      <Link to={`/catalog/${item._id}/details`}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.tittle}</h5>
      </Link>

      <div className="flex-grow"></div>

      <div className="flex items-end mt-2.5 mb-5">
      </div>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${item.itemPrice}
        </span>
       { username &&

       <Link
          onClick={() => addToCartClickHandler(item._id)}
          className="text-black bg-latest border  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-4xl text-sm px-5 py-2.5 text-center hover:scale-[1.08]"
        >
          Add to cart
        </Link>
       } 
      </div>
    </div>
  </div> ))}

        
      </div>

      {/* Navigation Buttons */}
      <button  onClick={prevClickHandler}className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded cursor-pointer">❮</button>
      <button  onClick={nextClickHandler}className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded cursor-pointer">❯</button>
    </div>
        </>
    )
}