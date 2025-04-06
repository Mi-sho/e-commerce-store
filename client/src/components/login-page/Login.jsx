import { Link } from 'react-router'
import styles from './Login.module.css'

export default function Login(){
    return(
        <>
        <div className={styles['wrapper']}>
        <form className={styles["login-wrapper"]}>
    <div className={styles["inside-form-wrapper"]}>
      <div className={styles["image-wrapper"]}>
        <img src="/tempPics/gabriella-clare-marino-O5JtGuNCI6k-unsplash.jpg" alt="" />
      </div>
      <div className={styles["inputs-wrapper"]}>
        <h2 className={styles['login-title']}>Login</h2>
        <div className={styles["input-group"]}>
          <label htmlFor="email">
            Email
            <i className="fa-solid fa-user" />
          </label>
          <input type="email" id="email" required="" />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="password">
            Password
            <i className="fa-solid fa-key" />
          </label>
          <input type="password" id="password" required="" />
        </div>
        <button className={styles['login-submit']}>Sign in</button>
        <div className={styles["register-link"]}>
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  </form>
  </div>
        </>
    )
}