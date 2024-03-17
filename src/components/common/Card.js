// @ts-nocheck
import styles from "./common.module.css";

function Card({ data }) {
  let { movieName, releaseDate, ratings, comments, reviewerName, cardType } =
    data;

  return (
    <div className={styles.cardMainDiv}>
      <div className={styles.cardDiv1}>
        <h1 className={styles.cardHeader}>
          {cardType == "movie" ? movieName : comments}
        </h1>
        <h1 className={styles.cardText1}>
          {cardType == "movie" ? `Released: ${releaseDate}` : ""}
        </h1>
        <h1 className={styles.cardText2}>
          {cardType == "movie" ? `Rating: ${ratings}` : `By ${reviewerName}`}
        </h1>
      </div>
      <div className={styles.cardDiv2}>
        <button className={styles.cardButton}>Edit</button>
        <button className={styles.cardButton}>Delete</button>
      </div>
    </div>
  );
}

export default Card;
