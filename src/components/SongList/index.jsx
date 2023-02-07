/*
    SongList:
    Component that renders a list of songs in a table
*/

import React, { useState } from "react";
import styles from "./SongList.module.scss";

import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import useSongs from "../../hooks/useSongs";
import SongListTableRow from "./SongListTableRow";
import usePagination from "../../hooks/usePagination";

const SongList = () => {
  // Get songs data
  const { songs, error, loading } = useSongs();

  // Get pagination variables from usePagination hook
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    itemsPerPage: songsPerPage,
    setItemsPerPage: setSongsPerPage
  } = usePagination(songs)

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
        <>
          <div className={styles.table}>
            {/* Render header row */}
            <SongListTableRow
              rowType={"header"}
              handleSort={handleSort}
              sortType={sortType}
            />

            {/* Render song data rows */}
            {songs.map((song, index) => {
              if (
                (currentPage - 1) * songsPerPage <= index &&
                index < currentPage * songsPerPage
              ) {
                return (
                  <SongListTableRow
                    rowType={"data"}
                    data={song}
                    key={index}
                  />
                )
              }
            })}

            {/* Display message when no results are found */}
            {!songs.length ? (
              <div className={`${styles.noResults}`}>
                <p>No results found</p>
              </div>
            ) :
              ""
            }

          </div>

          {/* Pagination buttons */}
          {songs.length ? (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default SongList;

