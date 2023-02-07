/*
    SongListTableRow:
    Component that renders table header row or data row

    Parameters:
    - rowType - Can be either "header" or "data". This parameter is used to decide whether the header row or data row should be rendered. If this is set to "data", the data parameter must also be provided or nothing will be rendered. Default value: "header"
    - data - Object with song data to render. Default value: null
    - handleSort - Method to sort song names alphabetically. Default value: null
    - sortType - Used to show whether the songs are sorted alphabetically from a to z or z to a. Values can be "asc" or "desc". Default value: null (when data hasn't been sorted yet)
*/

import React from 'react'
import styles from "./SongListTableRow.module.scss"

import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

const SongListTableRow = ({
  rowType = "header",
  data = null,
  handleSort = null,
  sortType = "",
}) => {


  // Method to render table header row or song data row based on provided rowType variable
  const renderRow = () => {
    if (rowType === "header") {
      return (
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
      )
    } else if (rowType === "data" && data) {
      const { name, artists, album, duration_ms } =
        data.track;

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
    }
  }

  return (
    <>
      {renderRow()}
    </>
  )
}

export default SongListTableRow