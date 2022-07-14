import React, { Component } from "react";

import hero from "../../Images/hero.png";
import styles from "./Home.module.css";
import { Link, Router, Switch } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { LINK_STYLE } from "../../components/constatnts/constants";
class Home extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <section className={`${styles.hero_container} container`}>
          <div className={styles.hero_text_container}>
            <h2 className={styles.hero_text}>{t("welcome")}</h2>
            {/* It will redirected to the user to category page */}
            <Link to="/category" className={styles.play_btn} style={LINK_STYLE}>
              {t("Play")}
            </Link>
          </div>
          <div className={styles.hero_img_container}>
            <img src={hero} alt="hero" className={styles.hero_img} />
          </div>
        </section>
      </div>
    );
  }
}

export default withTranslation()(Home);
