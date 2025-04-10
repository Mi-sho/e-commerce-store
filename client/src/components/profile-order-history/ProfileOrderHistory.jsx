import { useEffect, useState } from 'react';
import { useUserContext } from '../../context/UserContext'
import styles from './ProfileOrderHistory.module.css'
import { useGetUserOrders } from '../../api/orderApi';

export default function ProfileOrderHistory() {
        const { _id } = useUserContext();
        const [orders, setOrders] = useState([]);
        const {getOrders, isLoading} = useGetUserOrders();

        useEffect(() => {
                const loadOrders = async () => {
                    try{

                        const recievedOrders = await getOrders(_id);
                        setOrders(recievedOrders);
                    }catch (err){
                       return alert('There was an issue fetching your orders. Please try again.')
                    }
                }
            
            loadOrders();
        }, [_id])

     
        
    return(
    
        <>
        <div className={styles["cart-container"]}>

                        <h2 className={styles['cart-heading']}>My order history</h2>

                       {orders.length === 0 
                       ? (<p>No orders made.</p>)
                       :(
                        orders.map(order => (
                        <div key={order._id}className={styles["ordered-item-wrapper"]}>
                        <div className={styles["ordered-item-head-wrapper"]}>
                            <div className={styles["order-placed"]}>
                                <p className={styles["order-placed-tittle"]}>Order placed</p>
                                <p className={styles["order-placed-date"]}>
                                    {new Date(order._createdOn).toLocaleDateString()}
                                </p>
                            </div>
                            <div className={styles["order-placed"]}>
                                <p className={styles["order-total-price-tittle"]}>Total price</p>
                                <p className={styles["order-total-price-num"]}>${order.totalPrice}</p>
                            </div>
                            <div className={styles["order-placed"]}>
                                <p className={styles["order-locaton-tittle"]}>Ship to</p>
                                <p className={styles["order-locaton"]}>{order.userInfoData.city}, {order.userInfoData.country}</p>
                            </div>

                            <p className={styles["order-id"]}>Order # {order._id}</p>
                        </div>
                        <hr className={styles['order-hr']} />
                        
                        {order.cartItems.map(item => (

                        <div key={item._id} className={styles["ordered-item-body-wrapper"]}>
                            <div className={styles["ordered-item-img"]}>
                                <img src={item['item-image']} alt={item.tittle} />
                            </div>
                        <div className={styles['ordered-item-tittle']}>{item.tittle}</div>
                        </div>
                    ))}
                    
                    </div>


                    )))
                    }
                       
        </div>
        </>
    )
}