// @ts-nocheck
import styles from "./common.module.css";

function Form({ type, edit = false, hideForm }) {
  return (
    <div className={styles.formMainDiv}>
      <div className={styles.formDiv}>
        <h1 className={styles.formHeader}>Add new {type}</h1>
        {type == "movie" && (
          <>
            <input className={styles.formInput} placeholder="Name"></input>
            <input
              className={styles.formInput}
              placeholder="Release Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            ></input>
          </>
        )}

        {type == "review" && (
          <>
            <select
              // onChange={(e) => {
              //   changeScreen(e);
              // }}
              name="movie"
              id="movie"
              className={styles.formInput}
            >
              <option value="movie">Movies</option>
              <option value="review">Reviews</option>
            </select>
            <input className={styles.formInput} placeholder="Your name"></input>
            <input
              className={styles.formInput}
              placeholder="Rating out of 10"
              type="number"
            ></input>
            <textarea
              className={styles.formInput}
              placeholder="Review comments"
            ></textarea>
          </>
        )}
        <div className={styles.formButtonGroup}>
          <button
            onClick={() => {
              hideForm();
            }}
            className={styles.formButton2}
          >
            Cancel
          </button>
          {type == "movie" ? (
            <button className={styles.formButton1}>Add Movie</button>
          ) : (
            <button className={styles.formButton1}>Add Review</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
