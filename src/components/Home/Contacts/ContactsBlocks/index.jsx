import React from 'react';
import styles from "./style.module.scss";
import Link from "next/link";

const ContactsBlock = ({title, desc, icon, phone}) => {
    return (
        <div className={styles.contactsBlock}>
            {icon ? (
                <div className={styles.contactBlockIcon}>
                    <div className="img-container">
                        <svg className="icon">
                            <use xlinkHref={`#${icon}`}/>
                        </svg>
                    </div>
                </div>
            ) : <></>}
            <h2 className={styles.contactBlockTitle}>{title}</h2>
            {phone ? (
                    <a className={`${styles.contactBlockDesc} ${styles.contactBlockDescLink}`} href={`tel:${phone}`}>{phone}</a>
                ) :
                (
                    <span className={styles.contactBlockDesc}>{desc}</span>
                )
            }
        </div>
    );
};

export default ContactsBlock;