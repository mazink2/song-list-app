/*
    SongList:
    Component that renders a list of songs in a table
*/

import { useState, useRef } from "react";
import styles from "./SongList.module.scss";

import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import useSongs from "../../hooks/useSongs";
import useSongSearch from "../../hooks/useSongSearch";
import SongListTableRow from "./SongListTableRow";
import usePagination from "../../hooks/usePagination";
import SongListInputs from "./SongListInputs";

const SongList = () => {
    // Ref for smooth scroll location
    const tableRef = useRef(null);

    // Get songs data
    const { songs, error, status, loading, setLoading } = useSongs();

    // Get pagination variables from usePagination hook
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        itemsPerPage: songsPerPage,
        setItemsPerPage: setSongsPerPage,
    } = usePagination(songs);

    const [sortType, setSortType] = useState("");

    // Get search results from useSongSearch hook
    const [searchQuery, setSearchQuery] = useState("");
    const { filteredSongs, setFilteredSongs } = useSongSearch(
        songs,
        searchQuery,
        setCurrentPage,
        sortType,
    );

    // Sort song names in alphabetical order
    const handleSort = ({ manualSortType = "" }) => {
        let type = manualSortType ? manualSortType : sortType;

        setLoading(true);
        let sorted;
        // If not sorted or sorted in descending alphabetical order, sort in ascending order
        // If sorted in ascending alphabetical order, sort in descending order
        if (type === "" || type === "desc") {
            sorted = filteredSongs.sort((a, b) =>
                a.track.name.localeCompare(b.track.name),
            );
            setSortType("asc");
        } else {
            sorted = filteredSongs.sort((a, b) =>
                b.track.name.localeCompare(a.track.name),
            );
            setSortType("desc");
        }

        setFilteredSongs(sorted);
        setLoading(false);
    };

    return (
        <>
            {loading ? (
                <div className={styles.spinnerContainer}>
                    <Spinner />
                </div>
            ) : (
                <>
                    {status === "DONE" ? (
                        <>
                            {/* Search input and songs per page selector */}
                            <SongListInputs
                                songsPerPage={songsPerPage}
                                setSongsPerPage={setSongsPerPage}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                            />

                            {/* Pagination buttons */}
                            {filteredSongs.length ? (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    setCurrentPage={setCurrentPage}
                                    type="above"
                                />
                            ) : (
                                ""
                            )}

                            <div className={styles.table} ref={tableRef}>
                                {/* Header row */}
                                <SongListTableRow
                                    rowType={"header"}
                                    handleSort={handleSort}
                                    sortType={sortType}
                                />

                                {/* Song data rows */}
                                {filteredSongs.map((song, index) => {
                                    if (
                                        (currentPage - 1) * songsPerPage <=
                                            index &&
                                        index < currentPage * songsPerPage
                                    ) {
                                        return (
                                            <SongListTableRow
                                                rowType={"data"}
                                                data={song}
                                                key={index}
                                            />
                                        );
                                    } else {
                                      return <></>
                                    }
                                })}

                                {/* Display message when no results are found or when there is a fetch error */}
                                {!filteredSongs.length ? (
                                    <div className={`${styles.noResults}`}>
                                        {error ? (
                                            <p>
                                                There was an error getting the
                                                song list. Please try refreshing
                                                the page.
                                            </p>
                                        ) : (
                                            <p>No results found</p>
                                        )}
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>

                            {/* Pagination buttons */}
                            {filteredSongs.length ? (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    setCurrentPage={setCurrentPage}
                                    scrollToRef={tableRef}
                                />
                            ) : (
                                ""
                            )}
                        </>
                    ) : (
                        ""
                    )}
                </>
            )}
        </>
    );
};

export default SongList;
