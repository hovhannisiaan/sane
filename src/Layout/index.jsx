import React from 'react';
import Header from "../Layout/header";
import Footer from "../Layout/footer";
import styles from "./style.module.scss"

const Layout = ({children}) => {
    return (
        <main className={styles.sane}>
            <Header/>
            {children}
            <Footer/>
        </main>
    );
};

export default Layout;