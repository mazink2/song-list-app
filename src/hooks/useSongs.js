/*
    useSongs:
    Custom hook that generates an access token for the Spotify API and fetches the songs from this playlist: https://open.spotify.com/playlist/4MpGtMsjMWNoJCN9fCgx6m?si=2dcffbd6b2a64dfe
*/

import { useEffect, useState } from "react";

// Playlist url
const url =
    "https://api.spotify.com/v1/playlists/4MpGtMsjMWNoJCN9fCgx6m/tracks";

const useSongs = () => {
    const [songs, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Gets access token to use for Spotify API requests
        const getToken = async () => {
            const result = await fetch(
                "https://accounts.spotify.com/api/token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `Basic ${process.env.REACT_APP_SPOTIFY_CREDS}`,
                    },
                    body: "grant_type=client_credentials",
                },
            );

            const data = await result.json();
            return data.access_token;
        };

        // Fetch songs from the playlist
        const fetchSongs = async () => {
            // Get access token
            const token = await getToken();

            // Fetch songs
            try {
                setLoading(true);
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();

                setData(data.items);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    return { songs, error, loading };
};

export default useSongs;
