import React, { useState } from "react";
import styles from "./SongList.module.scss";

import Spinner from "../../ui/Spinner";
import useSongs from "../../hooks/useSongs";
import SongListTableRow from "./SongListTableRow";

const SongList = () => {
  // Get songs data
  const { songs, error, loading } = useSongs();

  const [sortType, setSortType] = useState("asc");

  const handleSort = () => {
    // TODO - sort song names in alphabetical order
  }

  return (
    <>
      {loading ? (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.table}>
          <SongListTableRow
            rowType={"header"}
            handleSort={handleSort}
            sortType={sortType}
          />

          {songs.map((song, i) => {
            return (
              <SongListTableRow
                rowType={"data"}
                data={song}
                key={i}
              />
            )
          })}

          {!songs.length ? (
            <div className={`${styles.noResults}`}>
              <p>No results found</p>
            </div>
          ) :
            ""
          }

        </div>
      )}
    </>
  );
};

export default SongList;

