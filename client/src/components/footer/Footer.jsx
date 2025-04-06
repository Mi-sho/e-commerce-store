import { Link } from 'react-router'
import styles from './Footer.module.css'

export default function Footer() {
    return(
        <>
         <footer id={styles['footer-el']}>
            <div className={styles["footer-container"]}>
            <hr />
                <div className={styles["footer-info"]}>
                <div className={styles["footer-content"]}>
                    <h3>Contact us:</h3>
                    <p>Email: antiqueworld@gmail.com</p>
                    <p>Phone: +359 888 22 33 12</p>
                    <p>Address: Bulgaria Boulevard, Sofia</p>
                </div>
                <div className={styles["footer-content"]}>
                    <h3>Follow us for more:</h3>
                    <ul className={styles["social-icons"]}>
                    <li><Link to="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></Link></li>
                    <li><Link to="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="https://www.x.com/"><i className="fa-brands fa-x-twitter"></i></Link></li>
                    </ul>
                </div>
                </div>
                <hr />
                <div className={styles["copy-right-bar"]}>
                    <p>&copy; 2025 Antique World. All rights reserved.</p>
                </div>
            </div>
         </footer>
  </>
    )
}