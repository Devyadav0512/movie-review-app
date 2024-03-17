// @ts-nocheck
import { useState } from "react";
import styles from "./home.module.css";
import HomeData from "./HomeData";
import Form from "../common/Form";

function Home() {
  const [screenName, setScreenName] = useState("movie");
  const [form, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");

  const showForm = (type) => {
    setShowForm(true);
    setFormType(type);
  };

  const hideForm = () => {
    setShowForm(false);
    setFormType("");
  };

  const changeScreen = (e) => {
    setScreenName(e.target.value);
  };

  return (
    <>
      {form && <Form hideForm={hideForm} type={formType} />}
      <div className={styles.homeDiv}>
        <div className={styles.divHeader}>
          MOVIECRITIC
          <select
            onChange={(e) => {
              changeScreen(e);
            }}
            className={styles.divDropDown}
            name="screen"
            id="screen"
          >
            <option defaultValue={screenName == "movie"} value="movie">
              Movies
            </option>
            <option defaultValue={screenName == "review"} value="review">
              Reviews
            </option>
          </select>
        </div>
        <div className={styles.divButtonGroup}>
          <button
            onClick={() => {
              showForm("movie");
            }}
            className={styles.divButton1}
          >
            Add new movie
          </button>
          <button
            onClick={() => {
              showForm("review");
            }}
            className={styles.divButton2}
          >
            Add new review
          </button>
        </div>
      </div>
      <HomeData screenName={screenName} />
    </>
  );
}

export default Home;
