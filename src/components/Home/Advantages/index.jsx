import React from 'react';
import styles from './style.module.scss'
import AdvantagesBlock from "../../../components/Home/Advantages/AdvantagesBlock";

const Advantages = () => {
    return (
        <div className={styles.advantages} id="effects">
            <div className="page-container">
                <h2 className={styles.advantagesTitle}>Advantages and Effects</h2>
                <div className={styles.advantagesContainer}>
                    <div className={styles.advantagesGrowBar}></div>
                    <div className={styles.advantagesSuccess}></div>
                    <AdvantagesBlock title={"Skin Care"}>
                        It is recommended to use Sané cleaning paste without gloves as it takes care of your hands
                        as well.
                    </AdvantagesBlock>
                    <AdvantagesBlock title={"Eternal Usage"}>
                        The shelf life of our product is 5 years. But even after 5 years, you can again use the same
                        Sané by mixing it with some water. She does not lose its fantastic properties at all in
                        super cleaning. This assumes that Sané has unlimited shelf life.
                    </AdvantagesBlock>
                    <AdvantagesBlock title={" Instructions"}>
                        Depending on the degree of soiling apply the paste on the moisture surface, wipe down by
                        rubbing with a sponge. Afterwards rinse with running water or wipe the surface with a moist
                        rag.
                        <br/><br/>
                        All done !
                        <br/><br/>
                        * In case of cleaning carpet and clothes it is recommended to apply first on a small area to
                        check color resistance. In such a case first try out the product on a hidden part of the
                        surface.
                    </AdvantagesBlock>
                </div>
            </div>
        </div>
    );
};

export default Advantages;