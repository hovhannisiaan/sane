import React, {useState} from 'react';
import styles from './style.module.scss'
import Link from "next/link";

const Header = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const clickHandler = () => {
        setMobileMenuActive(!mobileMenuActive)
    }

    return (
        <header className={styles.header}>
            <div className="page-container">
                <div className={styles.headerContainer}>
                    <Link href="#hero" scroll={false} className={styles.headerLogo}>
                        <div className="img-container">
                            <svg className="icon">
                                <use xlinkHref="#logo"></use>
                            </svg>
                        </div>
                    </Link>
                    <nav className={`${styles.nav}${mobileMenuActive ? ` ${styles.navMobileActive}` : ''}`}>
                        <ul className={styles.navList}>
                            <li onClick={clickHandler} className={styles.navItem}>
                                <Link className={styles.navLink} scroll={false} href="#about-us" >about us</Link>
                            </li>
                            <li onClick={clickHandler} className={styles.navItem}>
                                <Link className={styles.navLink} scroll={false} href="#effects">effects</Link>
                            </li>
                            <li onClick={clickHandler}  className={styles.navItem}>
                                <Link className={styles.navLink} scroll={false} href="#gallery">gallery</Link>
                            </li>
                            <li onClick={clickHandler}  className={styles.navItem}>
                                <Link className={styles.navLink} scroll={false} href="#contacts">contacts</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className={styles.navBtn}>Contact us</button>
                    <button onClick={clickHandler} className={`${styles.mobileBtn}${mobileMenuActive ? ` ${styles.mobileActive}` : ''}`}>
                        <span className={`${styles.mobileBtnLine} ${styles.mobileBtnLineTop}`}></span>
                        <span className={`${styles.mobileBtnLine} ${styles.mobileBtnLineMiddle}`}></span>
                        <span className={`${styles.mobileBtnLine} ${styles.mobileBtnLineBottom}`}></span>
                    </button>
                </div>
            </div>
            <div className={styles.headerOpacity}/>
        </header>
    );
};

export default Header;