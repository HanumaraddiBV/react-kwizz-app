import React, { Component } from 'react'
import english from "../../Images/English.png";
import maths from "../../Images/Mathematics.png";
import science from "../../Images/Science.png";
import CategoryItem from '../CategoryList/CategoryItem';
import styles from "./Category.module.css";
export default class Category extends Component {
  render() {
    return (
      <div>
      {/* creating card like elements for particular category of quiz */}
        <div className={styles.category_container}>
        <CategoryItem title="Maths" image={maths} />
        <CategoryItem title="English" image={english} />
        <CategoryItem title="Science" image={science} />
      </div>
      </div>
    )
  }
}
