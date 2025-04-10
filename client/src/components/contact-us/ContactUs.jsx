import { useActionState, useState } from 'react';
import styles from './ContactUs.module.css';
import { toast } from 'react-toastify';
import { useUserContext } from '../../context/UserContext';
import fetchHelper from '../../utils/fetchHelper';
import { Navigate } from 'react-router';
import { useContact } from '../../api/contactUsApi';


export default function ContactUs() {

    const {sendUs} = useContact();

    
const sendHandler = async(prevState, formData) => {
    const {name,phone,email,message} = Object.fromEntries(formData); 
    const emailData = Object.fromEntries(formData); 
    const secondName = formData.get('second-name')



    if(!name || !secondName || !phone || !email || !message){
        toast.error('Please fill in all the fields.');
        return;
    };

    if (!/^[A-Za-z\s]+$/.test(name)) {
        toast.error("First name must contain only letters.");
        return;
    }
    
    if (!/^[A-Za-z\s]+$/.test(secondName)) {
        toast.error("Second name must contain only letters.");
        return;
    }
    if (!/^\d{7,15}$/.test(phone)) {
        toast.error("Phone must be between 7 and 15 digits.");
        return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
    }
    
    if (message.length < 10) {
        toast.error("Message must be at least 10 characters long.");
        return;
    };
    try{
         await sendUs(emailData)
        toast.success('Thanks for sending us a message')
    } catch (err) {
        toast.error("Failed to send message. Please try again later.")
    }
}

const [formState,senderAction, isPending] = useActionState(sendHandler);

 
    return(
        <>
        <div className={styles["contact-us-container"]}>
        <div className={styles["contact-wrapper"]}>
            <div className={styles["contact-details-wrapper"]}>
                <h2 className={styles["contact-details-tittle"]}>Get in touch with us</h2>

                <p className={styles["subheading-contact-us"]}>Any questions? We would love to help you!</p>
              
                <span className={styles["contact-us-email"]}><i className="fa-solid fa-envelope"></i> antiqueworld@abv.bg</span>
                <span className={styles["contact-us-phone"]}><i className="fa-solid fa-phone"></i> +359 888 88 22 33</span>
                <span className={styles["contact-us-address"]}><i className="fa-solid fa-location-dot"></i> Bulgaria Boulevard 22, Sofia</span>
      
            </div>

            <div className={styles["contact-us-form-wrapper"]}>
                <form action={senderAction} className={styles["contact-us-form"]}>
                    <div className={styles["user-name"]}>
                    <label htmlFor="name">First name</label>
                    <input type="text" id="name" name="name"   required/>
                    </div>
                    <div className={styles["user-second-name"]}>
                    <label htmlFor="second-name">Last name</label>
                    <input type="text" id="second-name" name="second-name"   required/>
                    </div>
                    <div className={styles["user-phone"]}>
                    <label htmlFor="phone">Phone number</label>
                    <input type="number" id="phone" name="phone"   required/>
                    </div>
                    <div className={styles["user-email"]}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"  required/>
                    </div>
                    <div className={styles["user-message"]}>
                    <label htmlFor="message">Message</label>
                    <textarea type="text" id="message" name="message" placeholder='Type your message here...'   required/>
                    </div>
                    <button type='submit'  className={styles['contact-us-sbm-btn']}>Send</button>
                </form>
            </div>
        </div>
        </div>

        </>
    )
}