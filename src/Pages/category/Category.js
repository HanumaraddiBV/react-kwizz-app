import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

import ReactImage from '../../Images/ReactImage.png'
import JavaLogo from '../../Images/JavaImgLogo.jpg'
import JavascriptLogo from '../../Images/JavascriptImgLogo.jpg'
import CategoryItem from '../CategoryList/CategoryItem';
import styles from "./Category.module.css";
 class Category extends Component {
  render() {
    const {t} = this.props;
    return (
      <div>
      {/* creating card like elements for particular category of quiz */}
        <div className={styles.category_container}>
        <CategoryItem title={t('React')} image={ReactImage} />
        <CategoryItem title={t("Javascript")} image={JavascriptLogo} />
        <CategoryItem title={t('Java')} image={JavaLogo} />
      </div>
      </div>
    )
  }
}

export default withTranslation()(Category)