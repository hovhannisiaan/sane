import React from 'react';
import styles from "./style.module.scss"
import saneCan from '../../../../public/assets/img/saneCan.png'
import Image from "next/image";

const What = () => {
    return (
        <section className={styles.what} id="about-us">
            <div className="page-container">
                <div className={styles.whatContainer}>
                    <div className={styles.whatTextContainer}>
                        <h2 className={styles.whatTitle}>What is Sane?</h2>
                        <p className={styles.whatDesc}><b>Sané is a magic universal cleaning paste based on natural
                            mineral.
                            It removes persistent contaminants without damaging the surface.</b><br/><br/>
                            Use it everywhere: heavily contaminated hands, all types of domestic and industrial surfaces
                            except for glossy painted surfaces. Removes marks and stains from carpets and
                            clothes.<br/><br/>
                            Sané cleaning paste easily beats even the most persistent dirt gently and intensively
                            leaving a
                            pleasant fragrance. This universally applicable special cleaning agent from Sané can handle
                            severe organic soiling and down to the pores both indoors and outdoors.
                            Our product is perfect for effective and thorough cleaning.<br/><br/>
                            It contains 98.5% natural mineral and water and only 1.5% food additive and surfactant.

                            Sané does not cause allergies, is non-toxic, does not contain petroleum products and
                            aggressive
                            solvents and is completely biodegradable.

                            It is permitted to use the paste without gloves.</p>
                    </div>
                    <div className={styles.whatImgContainer}>
                        <div className={styles.whatImg}>
                            <div className="img-container">
                                <Image src={saneCan} alt="Sane Cleaner Can"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default What;