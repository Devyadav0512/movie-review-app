// @ts-nocheck
import styles from "./common.module.css";

function Form({ type, hideForm }) {
  return (
    <div className={styles.formMainDiv}>
      <h1>Add new {type}</h1>
      <input placeholder="Name"></input>
      <input placeholder="Your name"></input>
      <input placeholder="Release Date" type="date"></input>
      <input placeholder="Rating out of 10" type="number"></input>
      <input placeholder="Review comments"></input>
      <select
        // onChange={(e) => {
        //   changeScreen(e);
        // }}
        // className={styles.divDropDown}
        name="movie"
        id="movie"
      >
        <option value="movie">Movies</option>
        <option value="review">Reviews</option>
      </select>
      <h1
        onClick={() => {
          hideForm();
        }}
      >
        X
      </h1>
    </div>
  );
}

export default Form;
