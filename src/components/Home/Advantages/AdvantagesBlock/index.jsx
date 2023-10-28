import React, {useEffect, useRef} from 'react';
import styles from "./style.module.scss";

const AdvantagesBlock = ({title, children}) => {
    return (
        <div className={styles.advantagesBlock}>
            <h2 className={styles.advantagesBlockTitle}>
                {title}
            </h2>
            <div className={styles.advantagesBulletContainer}>
                <div className={styles.advantagesBullet}/>
            </div>
            <p className={styles.advantagesBlockDesc}>
                {children}
            </p>
        </div>
    );
};

export default AdvantagesBlock;