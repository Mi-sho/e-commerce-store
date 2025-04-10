import {  useNavigate } from "react-router";
import styles from "./Cart.module.css";
import { useEffect, useState } from "react";
import { getUserCart, removeItemFromCart } from "../../api/cartApi";
import fetchHelper from "../../utils/fetchHelper";


export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const CheckOutClickHandler = () => {
        navigate('/myprofile/checkout', {state: {cartItems, totalPrice}})
    }
    
    useEffect(() => {

      const loadCartItems = async () => {
        const itemIds = getUserCart();
       
        
        if(itemIds.length === 0){
          setCartItems([]);
          return;
        }

        try{
          const query = encodeURIComponent(`_id IN ("${itemIds.join('","')}")`);
          const neededData = encodeURIComponent(`_id,tittle,itemPrice,item-image`);

          const response = await fetchHelper.get(`http://localhost:3030/data/items?where=${query}&select=${neededData}`)
         
          setCartItems(response);

          
         
          const price = response.reduce((acc, item) => acc + item.itemPrice, 0);
          console.log(price);
          
          setTotalPrice(price);
        } catch (err) {
          console.error(`Failed: ${err.message}`);
          
        }


      };
      loadCartItems();

    }, [])
    
    

    

    const removeCartItemClickHandler =  (cartItemId) => {
    
         removeItemFromCart(cartItemId);

         const restItems = cartItems.filter(item => item._id !== cartItemId);
        setCartItems(restItems);

        const restPrice = restItems.reduce((acc, item) => acc + item.itemPrice, 0);
        setTotalPrice(restPrice);
     
        
      
    }

  return (
    <>
        <div className={styles["cart-container"]}>
            <span className={styles["heading-cart-wrapper"]}>
                <h2 className={styles['cart-heading']}>Your Cart</h2>
                <h5>( {cartItems.length} items)</h5>

            </span>



    {cartItems.length <= 0 
       ? <p>You dont have any items in your cart!</p>
      :<table className={styles["cart-table"]}>
        {/* <thead> */}

        <tr className={styles["thead"]}>
          <th className={styles["cart-table-img-h"]}>Image</th>
          <th className={styles["cart-table-item-h"]}>Product</th>
          <th className={styles["cart-table-price-h"]}>Price</th>
          <th className={styles["cart-table-btn-h"]}>Remove</th>
        </tr>
        {/* </thead> */}

        <tbody>
        {cartItems.map(item =><tr key={item._id}>
          <td  data-label="Image" className={styles["cart-table-img-r"]}><img src={item['item-image']} alt={item.tittle} /></td>
          <td  data-label="Item" className={styles["cart-table-item-r"]}>{item.tittle}</td>
          <td  data-label="Price" className={styles["cart-table-price-r"]}>${item.itemPrice}</td>
          <td  data-label="Action" className={styles["cart-table-btn-r"]}><button onClick={() => removeCartItemClickHandler(item._id)}>Remove</button></td>
        </tr> )}
        
        </tbody>

      </table>
}
{cartItems.length <= 0 
? ''
:        <div className={styles["checkout-wrapper"]}>
        
        <p className={styles["total-price"]}>Total price: <strong>${totalPrice}</strong></p>
        <button className={styles["pay-btn"]} onClick={() => CheckOutClickHandler()} >Check out</button>
      </div>

}
</div>
    
     
    </>
  );
}
