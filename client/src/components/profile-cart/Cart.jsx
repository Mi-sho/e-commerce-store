import {  useNavigate } from "react-router";
import styles from "./Cart.module.css";
import { useEffect, useState } from "react";
import { useCart } from "../../api/cartApi";

export default function Cart() {
    const navigate = useNavigate();
    const { getUserCart } = useCart();
    const [cartItems, setCartItems] = useState([]);

    const CheckOutClickHandler = () => {
        navigate('/myprofile/checkout')
    }
    

    useEffect(() => {
      getUserCart()
      .then(setCartItems)
    }, [])
    

    const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0)
    

  return (
    <>
        <div className={styles["cart-container"]}>
            <span className={styles["heading-cart-wrapper"]}>
                <h2 className={styles['cart-heading']}>Your Cart</h2>
                <h5>( {cartItems.length} items)</h5>

            </span>



    {cartItems.length <= 0 
       ? <p>YOur cArt is Empty Ma BOI !!!</p>
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
        {cartItems.map(item =><tr key={item.itemId}>
          <td  data-label="Image" className={styles["cart-table-img-r"]}><img src={item.image} alt={item.tittle} /></td>
          <td  data-label="Item" className={styles["cart-table-item-r"]}>{item.tittle}</td>
          <td  data-label="Price" className={styles["cart-table-price-r"]}>${item.price}</td>
          <td  data-label="Action" className={styles["cart-table-btn-r"]}><button>Remove</button></td>
        </tr> )}
        
        {/* <tr>
          <td data-label="Image" className={styles["cart-table-img-r"]}><img src="/tempPics/IMG_20241112_131110.jpg" alt="" /></td>
          <td data-label="Item" className={styles["cart-table-item-r"]}>Unique antique Chinassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssslot of 100 vases with floral motifs</td>
          <td data-label="Price" className={styles["cart-table-price-r"]}>$499</td>
          <td data-label="Action"  className={styles["cart-table-btn-r"]}><button>Remove</button></td>
        </tr>
        <tr>
          <td data-label="Image" className={styles["cart-table-img-r"]}><img src="/tempPics/birmingham-museums-trust-HEEvYhNzpEo-unsplash.jpg" alt="" /></td>
          <td data-label="Item" className={styles["cart-table-item-r"]}>Unique antique Chinassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssslot of 100 vases with floral motifs</td>
          <td data-label="Price" className={styles["cart-table-price-r"]}>$499</td>
          <td data-label="Action"  className={styles["cart-table-btn-r"]}><button>Remove</button></td>
        </tr> */}
        </tbody>

      </table>
}
{false ? '':
      <div className={styles["checkout-wrapper"]}>
        
        <p className={styles["total-price"]}>Total price: <strong>${totalPrice}</strong></p>
        <button className={styles["pay-btn"]} onClick={CheckOutClickHandler} >Check out</button>
      </div>

}
</div>
    
     
    </>
  );
}
