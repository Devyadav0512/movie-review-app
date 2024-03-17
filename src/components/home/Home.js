// @ts-nocheck
import { useState } from "react";
import styles from "./home.module.css";
import HomeData from "./HomeData";

function Home() {
  const [screenName, setScreenName] = useState("movie");

  const changeScreen = (e) => {
    setScreenName(e.target.value);
  };

  return (
    <>
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
          <button className={styles.divButton1}>Add new movie</button>
          <button className={styles.divButton2}>Add new review</button>
        </div>
      </div>
      <HomeData screenName={screenName} />
    </>
  );
}

export default Home;
