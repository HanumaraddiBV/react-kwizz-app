import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { CATEGORY_ROUTE, LINK_STYLE, SIGNUP_ROUTE } from "../../components/constatnts/constants";

import styles from "./Rules.module.css";

const Rules = () => {
  const { category } = useParams();
  const { t } = useTranslation();
  const history = useHistory();
  const { userDetails } = useSelector((store) => store);

  return userDetails.email ? (
    <div>
      <div className={styles.rules_container}>
        <h2>{t("Rules")}</h2>
        <ol>
          <li>{t("First_Point")}</li>
          <li>{t("Second_Point")}</li>
          <li>{t("Third_Point")}</li>
          <li>{t("Fourth_Point")}</li>
          <li>{t("Fifth_Point")}</li>
        </ol>
        <div className={styles.rules_footer}>
          {/* it will redirect user to category page */}
          <Link
            to={CATEGORY_ROUTE}
            className={`btn btn-default ${styles.goback_btn}`}
            style={LINK_STYLE}
          >
            {t("Go Back")}
          </Link>
          {/* when user click start playing button he will redirected to the quiz page user can get all the questions and answers */}
          <Link
            to={`/quiz/${category}`}
            className={`btn btn-default ${styles.startplay_btn}`}
            style={LINK_STYLE}
          >
            {t("Start Playing")}
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className='signup-alert'>
      <h1>
        If you want to access quiz you have to sign up first. Please click below
        button to sign up
      </h1>
      <button className={`btn btn-primary`}>
        <Link to={SIGNUP_ROUTE} style={LINK_STYLE}>Sign Up</Link>
      </button>
    </div>
  );
};

export default Rules;
