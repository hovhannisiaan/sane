import React from 'react';
import styles from "./style.module.scss"
import ContactsBlock from "../../../components/Home/Contacts/ContactsBlocks";
import ContactForm from "../../../components/Home/Contacts/ContactForm";
const Contacts = props => {
    return (
        <div className={styles.contacts} id="contacts">
            <div className="page-container">
                <div className={styles.margin}></div>
                <div className={styles.contactsContainer}>
                    <div className={styles.contactsBlocks}>
                        <ContactsBlock title={"email"} desc={"info@marathontrade.ae"} icon={"email"}/>
                        <ContactsBlock title={"phone"} phone={"+971585921572"} icon={"phone"}/>
                        <ContactsBlock title={"instagram"} desc={"@sane.uae"} icon={"instagram"}/>
                    </div>
                    <div className={styles.contactsFormContainer}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;