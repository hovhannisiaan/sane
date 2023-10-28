import React, {useRef, useState} from 'react';
import styles from "./style.module.scss"
import sanePic from "../../../../public/assets/img/sane/10-min.jpg"
import Image from "next/image";

const Hero = () => {
    const videoRef = useRef();
    const [mobileVideoActive, setMobileVideoActive] = useState(false)
    const videoHandler = () => {
        setMobileVideoActive(!mobileVideoActive);

        if (mobileVideoActive) {
            videoRef.current.play()
        } else {
        videoRef.current.pause();
        }
    }

        return (
            <div className={styles.hero} id="hero">
                <div className={styles.heroImgContainer}>
                    <div className={styles.opacity}></div>
                    <video ref={videoRef} className={styles.heroImg} autoPlay loop={true} muted={true} type='video/mp4'
                           preload='auto' playsInline controls={false}>
                        <source
                            src="https://res.cloudinary.com/deixdj0lx/video/upload/v1688495439/ca3b2fad-f19f-4593-92ae-ca25fb681dc6_ceycmr.mp4"/>
                    </video>
                    {/*<Image className={`${styles.heroImg} ${styles.heroImgMobile}`} src={sanePic} alt="sane"/>*/}
                </div>
                {/*<button onClick={videoHandler} className={styles.heroMobileBtn}>*/}
                {/*    <span className="img-container">*/}
                {/*        <svg className="icon">*/}
                {/*            {mobileVideoActive ? (*/}
                {/*                <use xlinkHref="#play-button"/>*/}
                {/*            ) : (*/}
                {/*                <use xlinkHref="#pause-button"/>*/}
                {/*            )}*/}
                {/*        </svg>*/}
                {/*    </span>*/}
                {/*</button>*/}
                <button className={styles.heroMobileBtn}>
                    <input type="checkbox" name="" className={styles.videoBtnToggle} id="toggle" />
                    <label onClick={videoHandler} htmlFor="toggle" className={styles.videoBtn}>
                        <div className={styles.videoBtnLines}>
                            <div className={styles.videoBtnLine}></div>
                            <div className={styles.videoBtnMove}>
                                <div className={styles.videoBtnLine}></div>
                                <div className={styles.videoBtnLine}></div>
                            </div>
                        </div>
                    </label>
                </button>
            </div>
        );
    };

    export default Hero;