import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { HOME_ROUTE, LINK_STYLE } from "../../components/constatnts/constants";
import styles from "./CategoryItem.module.css";
class CategoryItem extends Component {
  render() {
    return(
    <Link to={`/rules/${this.props.title}`} className={styles.category_link} style={LINK_STYLE}>
      <div className={styles.category_item}>
        <img
          src={this.props.image}
          alt={this.props.title + "_image"}
          className="res-img"
        />
        <p className={styles.category_item_title}>{this.props.title}</p>
      </div>
    </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.userDetails.email,
  };
};
export default connect(mapStateToProps)(CategoryItem);
