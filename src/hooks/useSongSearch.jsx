/*
    useSongSearch:
    Custom hook that searches provided array of songs for the provided search query

    Parameters:
    - songs - Array of objects with song data to search
    - searchQuery - Search query to use when searching songs data
    - setCurrentPage - State setter function to reset page to 1 after performing search 
*/

import { useState, useEffect, useCallback } from "react";

const useSongSearch = (
    songs = [],
    searchQuery = "",
    setCurrentPage,
    sortType,
) => {
    const [filteredSongs, setFilteredSongs] = useState([]);

    // Method to search for songs in provided data array that match
    // the album, song name, or artist names
    const handleSearch = useCallback(() => {
        let filtered;

        // Search the results
        if (searchQuery.length) {
            filtered = songs.filter((song) => {
                const { album, name, artists } = song.track;
                let query = searchQuery.toLowerCase();

                // Combine artists into one string
                const artistsStr = artists.reduce(
                    (artistsStr, artist, index) => {
                        if (index === 0) return artist.name;
                        return (artistsStr += `, ${artist.name}`);
                    },
                    "",
                );

                // Check if there is a match for the search query
                if (
                    album.name.toLowerCase().includes(query) ||
                    name.toLowerCase().includes(query) ||
                    artistsStr.toLowerCase().includes(query)
                ) {
                    return true;
                }

                return false;
            });
        } else {
            filtered = songs;
        }

        // Sort results by name if they were sorted before the search
        if (sortType === "asc") {
            filtered = filtered.sort((a, b) =>
                a.track.name.localeCompare(b.track.name),
            );
        }
        if (sortType === "desc") {
            filtered = filtered.sort((a, b) =>
                b.track.name.localeCompare(a.track.name),
            );
        }

        // Reset current page to one and display results
        setCurrentPage(1);
        setFilteredSongs(filtered);
    }, [searchQuery, setCurrentPage, songs, sortType]);

    // Run search when searchQuery is updated
    useEffect(() => {
        handleSearch();
    }, [searchQuery, handleSearch]);

    // Initialize song results when page loads
    useEffect(() => {
        setFilteredSongs(songs);
    }, [songs]);

    // Return search results
    return {
        filteredSongs,
        setFilteredSongs,
    };
};

export default useSongSearch;
