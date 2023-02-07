/*
    SonSongListInputsgList:
    Component that renders the search input box and songs per page selector

    Parameters:
    - searchQuery - The search query that goes in the input box
    - songsPerPage - The number of songs to be displayed per page
    - setSearchQuery, setSongsPerPage - State setter functions for the above outputs
*/

import styles from "./SongListInputs.module.scss";

const SongListInputs = ({
    searchQuery,
    setSearchQuery,
    songsPerPage,
    setSongsPerPage,
}) => {
    return (
        <>
            <div className={styles.inputsContainer}>
                {/* Search input box */}
                <input
                    type="text"
                    placeholder="Search by keyword"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className={styles.selectContainer}>
                    {/* Songs per page selector */}
                    <select
                        className={styles.songsPerPage}
                        onChange={(e) => {
                            setSongsPerPage(Number(e.target.value));
                        }}
                        defaultValue={songsPerPage}
                    >
                        <option value="3">Songs Per Page: 3</option>
                        <option value="5">Songs Per Page: 5</option>
                        <option value="10">Songs Per Page: 10</option>
                        <option value="20">Songs Per Page: 20</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default SongListInputs;
