import React, { useEffect, useState } from "react";
import styles from "./SongList.module.scss";

import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import Spinner from "../../ui/Spinner";
import useSongs from "../../hooks/useSongs";

const SongList = () => {
  // Get songs data
  const { songs, error, loading } = useSongs();

  const [sortType, setSortType] = useState("asc");

  return (
    <>
      {loading ? (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.table}>
          <div
            className={`${styles.tableRow} ${styles.tableHeadersContainer}`}
          >
            <div className={`${styles.tableCell} ${styles.album}`}>
              Album
            </div>
            <div className={`${styles.tableCell} ${styles.song}`}>
              Song
              {sortType === "asc" ? (
                <button className={styles.sortButton}>
                  <AiOutlineSortDescending />
                </button>
              ) : (
                <button className={styles.sortButton}>
                  <AiOutlineSortAscending />
                </button>
              )}
            </div>
            <div className={`${styles.tableCell} ${styles.artist}`}>
              Artist
            </div>
            <div
              className={`${styles.tableCell} ${styles.duration}`}
            >
              Duration
            </div>
          </div>

          {songs.map((song) => {
            const { name, artists, album, duration_ms } =
              song.track;

            const durationInSeconds = (duration_ms / 1000).toFixed()

            return (
              <div
                className={`${styles.tableRow} ${styles.tableDataContainer}`}
              >
                <div className={`${styles.tableCell} ${styles.album}`}>
                  <img
                    src={album.images[1].url}
                    alt={album.name}
                    title={`Album - ${album.name}`}
                  />
                </div>
                <div className={`${styles.tableCell} ${styles.song}`}>
                  {name}
                </div>
                <div className={`${styles.tableCell} ${styles.artist}`}>
                  {artists.map((artist, i) => `${i > 0 ? ", " : ""}${artist.name}`)}
                </div>
                <div
                  className={`${styles.tableCell} ${styles.duration}`}
                >
                  {Math.floor(durationInSeconds / 60)}:{(durationInSeconds % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                </div>
              </div>
            )
          })}

          {!songs.length ? (
            <div className={`${styles.noResults}`}>
              <div className={styles.tableCell}>
                <p>No results found</p>
              </div>
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

