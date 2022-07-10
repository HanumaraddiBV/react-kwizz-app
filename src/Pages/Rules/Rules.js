import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import styles from "./Rules.module.css";

const Rules = () => {
  const { category } = useParams();
  const {t} = useTranslation()
  return (
    <div>
      <div className={styles.rules_container}>
        <h2>{t('Rules')}</h2>
        <ol>
          <li>{t('First_Point')}</li>
          <li>{t('Second_Point')}</li>
          <li>
            {t('Third_Point')}
          </li>
          <li>
            {t('Fourth_Point')}
          </li>
          <li>
            {t('Fifth_Point')}
          </li>
        </ol>
        <div className={styles.rules_footer}>
        {/* it will redirect user to category page */}
          <Link
            to="/category"
            className={`btn btn-default ${styles.goback_btn}`}
          >
            {t('Go Back')}
          </Link>
          {/* when user click start playing button he will redirected to the quiz page user can get all the questions and answers */}
          <Link
            to={`/quiz/${category}`}
            className={`btn btn-default ${styles.startplay_btn}`}
          >
            {t('Start Playing')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rules;
