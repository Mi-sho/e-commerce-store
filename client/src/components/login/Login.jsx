import { Link, useNavigate } from 'react-router'
import { useActionState } from 'react';

import styles from './Login.module.css'
import { useLogin } from '../../api/authApi';
import { useUserContext } from '../../context/userContext';


export default function Login(){
  const navigate = useNavigate();
  const {  userLoginHandler } = useUserContext();
  const { login } = useLogin();


  const loginHandler = async (prevState, formData) => {
    const {email, password} = Object.fromEntries(formData);


    try{
      const userData = await login(email, password);
      userLoginHandler(userData);

     
  

      navigate('/');
    }catch(err){
      alert(err.message);
      return{ email }
    }

  };

  const [formState, loginAction, isPending] = useActionState(loginHandler, {email: '', password: '' });





    return(
        <>
        <div className={styles['wrapper']}>
        <form className={styles["login-wrapper"]} action={loginAction}>
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
          <input type="email" id="email" name="email" defaultValue={formState.email}  required />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="password">
            Password
            <i className="fa-solid fa-key" />
          </label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className={styles['login-submit']} disabled={isPending}>Sign in</button>
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