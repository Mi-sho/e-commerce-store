import { useLocation, useNavigate } from "react-router";
import styles from "./Checkout.module.css";
import { useActionState } from "react";
import { usePlaceOrder } from "../../api/orderApi";
import { clearCartStorageOnLogout } from "../../api/cartApi";
import { toast } from "react-toastify";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
    const { cartItems, totalPrice } = location.state || {};
    const { orderItem } = usePlaceOrder();
    

    const checkoutSubmitHandler = async(prevState, formData) => {

      const userInfoData = Object.fromEntries(formData);

      const orderData ={
        userInfoData,
        cartItems,
        totalPrice
      };

      try{

        const response = await orderItem(orderData);
        toast.success("Order was made!");
        clearCartStorageOnLogout();
        navigate('/myprofile/orderhistory')
        
      } catch(err){
        toast.error(err.message)
      }

    }


    const [formState, chechoutAction, isPending] = useActionState(checkoutSubmitHandler)
  return (
    <>
      <div className={styles["checkout-wrapper"]}>
        <div className={styles["checkout-heading-wrap"]}>
          <h1 className={styles["checkout-heading"]}>Checkout</h1>
        </div>

        <div className={styles["center-wrapper"]}>
          <div className={styles["checkout-form-wrapper"]}>
            <h2 className={styles["checkout-form-heading"]}>Payment details</h2>
            <form action={chechoutAction} className={styles["payment-form"]}>
              <div className={styles["first-last-name"]}>
                <div className={styles["first-name-checkout"]}>
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" id="firstname" name="firstname" required />
                </div>

                <div className={styles["last-name-checkout"]}>
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" id="lastname" name="lastname" required />
                </div>
              </div>

              <div className={styles["email-checkout"]}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>

              <div className={styles["phone-checkout"]}>
                <label htmlFor="phone">Phone number</label>
                <input type="number" id="phone" name="phone" required />
              </div>

              <div className={styles["address-checkout"]}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" required />
              </div>

              <div className={styles["city-country-wrapper"]}>
                <div className={styles["city-checkout"]}>
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" name="city" required />
                </div>

                <div className={styles["country-checkout"]}>
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" name="country" required />
                </div>
              </div>

              <div className={styles["final-order-btn"]}>
                <button className={styles["finalized-order"]} disabled={isPending}>Order</button>
              </div>
            </form>
          </div>

          <div className={styles["checkout-summary-wrapper"]}>
            <h2 className={styles["checkout-summary-heading"]}>
              Order summary
            </h2>
            <div className={styles["summary-headings"]}>
              <p className={styles["summary-item-h"]}>Item</p>
              <p className={styles["summary-price-h"]}>Price</p>
            </div>
            <div className={styles["summary-items"]}>
              {cartItems.map(item => (
                <div key={item._id} className={styles["summary-item"]}>
                <p className={styles["summary-item-title"]}>{item.tittle}</p>
                <p className={styles["summary-item-price"]}>${item.itemPrice}</p>
              </div>
              ))}
            </div>
            <div className={styles["summary-price"]}>
              <h4 className={styles["summary-total-price-h"]}>Total price:</h4>
              <p className={styles["summary-total-price-num"]}>${totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
