import { Link } from 'react-router'

import styles from './Register.module.css'

export default function Register() {
    return(
        <>
        <div className={styles["register-wrapper"]}>
        <form action="" method="POST" className={styles["register-form"]}>
    <div className={styles["inner-wrapper"]}>
      <h2 className={styles["register-title"]}>Register</h2>
      <div className={styles["inputs-wrapper"]}>
        <label htmlFor="username">
          Username
          <i className="fa-solid fa-user" />
        </label>
        <input type="text" id="username" required="" />
        <label htmlFor="email">
          Email
          <i className="fa-solid fa-envelope" />
        </label>
        <input type="email" id="email" required="" />
        <label htmlFor="password">
          Password
          <i className="fa-solid fa-key" />
        </label>
        <input type="text" id="password" required="" />
        <label htmlFor="re-password">
          Repeat password
          <i className="fa-solid fa-key" />
        </label>
        <input type="text" id="re-password" required="" />
      </div>
      <div className={styles["button-wrapper"]}>
        <button className={styles["register-btn"]}>Register</button>
      </div>
      <div className={styles["registred-already"]}>
        Already have an account?
        <Link to="/login" className={styles["redirect"]}>Log in</Link>
      </div>
    </div>
  </form>
  </div>
        </>
    )
}