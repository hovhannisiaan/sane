import React from 'react';
import styles from "./style.module.scss";
const ContactForm = props => {
    return (
        <form className={styles.contactForm}>
            <h2 className={styles.contactFormTitle}>Get in touch</h2>
            <label className={styles.contactLabel}>
                <input type="text" className={styles.contactInput} placeholder={"name"}/>
            </label>
            <label className={styles.contactLabel}>
                <input type="text" className={styles.contactInput} placeholder={"surname"}/>
            </label>
            <label className={styles.contactLabel}>
                <input type="email" className={styles.contactInput} placeholder={"email"}/>
            </label>
            <label className={styles.contactLabel}>
                <input type="text" className={styles.contactInput} placeholder={"phone"}/>
            </label>
            <button className={styles.formButton} type="submit">Send</button>
        </form>
    );
};

export default ContactForm;