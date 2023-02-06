import React, { useState } from "react";
import styles from "./SongList.module.scss";

import {
    AiOutlineSortAscending,
    AiOutlineSortDescending,
} from "react-icons/ai";
import Spinner from "../../ui/Spinner";

const SongList = () => {
    const [loading, setLoading] = useState(false);
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

                    <div
                        className={`${styles.tableRow} ${styles.tableDataContainer}`}
                    >
                        <div className={`${styles.tableCell} ${styles.album}`}>
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e02a1d6c61fcc26e53a3f2ef163"
                                alt="Rage"
                            />
                        </div>
                        <div className={`${styles.tableCell} ${styles.song}`}>
                            Rage
                        </div>
                        <div className={`${styles.tableCell} ${styles.artist}`}>
                            Bleeding Through
                        </div>
                        <div
                            className={`${styles.tableCell} ${styles.duration}`}
                        >
                            3:54
                        </div>
                    </div>
                    <div
                        className={`${styles.tableRow} ${styles.tableDataContainer}`}
                    >
                        <div className={`${styles.tableCell} ${styles.album}`}>
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e02a1d6c61fcc26e53a3f2ef163"
                                alt="Rage"
                            />
                        </div>
                        <div className={`${styles.tableCell} ${styles.song}`}>
                            Rage
                        </div>
                        <div className={`${styles.tableCell} ${styles.artist}`}>
                            Bleeding Through
                        </div>
                        <div
                            className={`${styles.tableCell} ${styles.duration}`}
                        >
                            3:54
                        </div>
                    </div>
                    <div
                        className={`${styles.tableRow} ${styles.tableDataContainer}`}
                    >
                        <div className={`${styles.tableCell} ${styles.album}`}>
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e02a1d6c61fcc26e53a3f2ef163"
                                alt="Rage"
                            />
                        </div>
                        <div className={`${styles.tableCell} ${styles.song}`}>
                            Rage
                        </div>
                        <div className={`${styles.tableCell} ${styles.artist}`}>
                            Bleeding Through
                        </div>
                        <div
                            className={`${styles.tableCell} ${styles.duration}`}
                        >
                            3:54
                        </div>
                    </div>

                    <div className={`${styles.noResults}`}>
                        <div className={styles.tableCell}>
                            <p>No results found</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SongList;
