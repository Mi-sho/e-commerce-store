import { Link, useNavigate } from 'react-router'

import styles from './Register.module.css'
import { useRegister } from '../../api/authApi';
import { useActionState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useRegister();


  const registerHandler = async (prevState, formData) => {
    const {username, email, password} = Object.fromEntries(formData);
    const rePass = formData.get('re-password');

   
    if(password !== rePass) {
      alert('Password missmatch');
      return;
    }
    console.log(email,username,password);
    

    try{

      const userData = await register(username, email, password);
    
      
      localStorage.setItem('auth',JSON.stringify(userData));
      

      navigate('/');
    } catch(err){
      alert(err.message);
    }

    
  }

  const [formState, registerAction, isPending] = useActionState(registerHandler, {username: '', email: '', password: ''})



    return(
        <>
        <div className={styles["register-wrapper"]}>
        <form method="POST" className={styles["register-form"]} action={registerAction}>
    <div className={styles["inner-wrapper"]}>
      <h2 className={styles["register-title"]}>Register</h2>
      <div className={styles["inputs-wrapper"]}>
        <label htmlFor="username">
          Username
          <i className="fa-solid fa-user" />
        </label>
        <input type="text" id="username" name="username"required />
        <label htmlFor="email">
          Email
          <i className="fa-solid fa-envelope" />
        </label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">
          Password
          <i className="fa-solid fa-key" />
        </label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="re-password">
          Repeat password
          <i className="fa-solid fa-key" />
        </label>
        <input type="password" id="re-password" name="re-password" required/>
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