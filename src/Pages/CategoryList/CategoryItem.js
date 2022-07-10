import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.css";
export default class CategoryItem extends Component {
  render() {
    return (
      <Link to={`/rules/${this.props.title}`} className={styles.category_link}>
        <div className={styles.category_item}>
          <img
            src={this.props.image}
            alt={this.props.title + "_image"}
            className="res-img"
          />
          <p className={styles.category_item_title}>{this.props.title}</p>
        </div>
      </Link>
    );
  }
}
