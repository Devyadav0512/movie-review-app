// @ts-nocheck
import { useState } from "react";
import Card from "../common/Card";
import styles from "./homedata.module.css";

import { api } from "~/utils/api";

function HomeData({ screenName }) {
  const [searchMovie, setSearchMovie] = useState("");

  const updateMovieResult = (e) => {
    setSearchMovie(e.target.value);
  };

  let { data, isLoading, isError } =
    screenName == "movie"
      ? api.movies.all.useQuery()
      : api.reviews.all.useQuery();

  return (
    <>
      {isLoading && <div>Loading Data</div>}
      {isError && <div>Error fetching Data</div>}
      <div className={styles.homeDataDiv}>
        <h1 className={styles.homeDataHeader}>The best movie reviews site!</h1>
        <input
          className={styles.homeDataInputSearch}
          name="movie"
          placeholder="Search for your favourite movie"
          value={searchMovie}
          onChange={(e) => {
            updateMovieResult(e);
          }}
        ></input>
        <div className={styles.homeDataCont}>
          {data &&
            data.length > 0 &&
            data.map((ele, idx) => {
              return <Card key={idx} data={ele} />;
            })}
        </div>
      </div>
    </>
  );
}

export default HomeData;
