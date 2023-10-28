import React from 'react';
import styles from './style.module.scss'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="page-container">
                <div className={styles.footerContainer}>
                    <Link scroll={false} href="#hero" className={styles.footerLogo}>
                        <div className="img-container">
                            <svg className="icon">
                                <use xlinkHref="#logo"></use>
                            </svg>
                        </div>
                    </Link>
                    <ul className={styles.footerNav}>
                        <li className={styles.footerNavItem}>
                            <Link scroll={false} className={styles.footerNavLink} href={'#what'}>
                                About Us
                            </Link>
                        </li>
                        <li className={styles.footerNavItem}>
                            <Link scroll={false} className={styles.footerNavLink} href={'#effects'}>
                                Effects
                            </Link>
                        </li>
                        <li className={styles.footerNavItem}>
                            <Link scroll={false} className={styles.footerNavLink} href={'#gallery'}>
                                Gallery
                            </Link>
                        </li>
                        <li className={styles.footerNavItem}>
                            <Link scroll={false} className={styles.footerNavLink} href={'#contacts'}>
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
                    <p className={styles.footerCopyright}>2023 Copyright text</p>
            </div>
        </footer>
    );
};

export default Footer;