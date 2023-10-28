import React from 'react';
import styles from './style.module.scss'
import Image from "next/image";
import saneCan from "../../../../public/assets/img/sane/1-min.jpg";
import saneCan2 from "../../../../public/assets/img/sane/10-min.jpg";
import saneCan3 from "../../../../public/assets/img/sane/13-min.jpg";
import saneCan4 from "../../../../public/assets/img/sane/3-min.jpg";


const Gallery = props => {
    return (
        <section className={styles.gallery} id="gallery">
            <div className="page-container">
            <h2 className={styles.galleryTitle}>Gallery</h2>
                <div className={styles.galleryContainer}>
                        <div className={`${styles.galleryImageContainer}`}>
                            <div className="img-container">
                                <Image className={styles.galleryImage} src={saneCan} alt={"sane can"}/>
                            </div>
                        </div>
                    <div className={`${styles.galleryImageContainer}`}>
                        <div className="img-container">
                            <Image className={styles.galleryImage} src={saneCan2} alt={"sane can"}/>
                        </div>
                    </div>
                    <div className={`${styles.galleryImageContainer}`}>
                        <div className="img-container">
                            <Image className={styles.galleryImage} src={saneCan3} alt={"sane can"}/>
                        </div>
                    </div>
                    <div className={`${styles.galleryImageContainer}`}>
                        <div className="img-container">
                            <Image className={styles.galleryImage} src={saneCan4} alt={"sane can"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;