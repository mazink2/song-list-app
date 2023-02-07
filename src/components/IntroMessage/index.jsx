import styles from "./IntroMessage.module.scss";

const IntroMessage = () => {
    return (
        <div className={styles.introMessageContainer}>
            <h1>Browse songs</h1>
            <p>
                This is a list of songs pulled from the{" "}
                <a
                    href="https://developer.spotify.com/documentation/web-api/"
                    target="_blank"
                >
                    Spotify API
                </a>
                . It's from one of my most listened to Spotify playlists last
                year, definitely check some of it out!
            </p>
            <p>
                You can click any of the albums, song names or artist names and
                it'll take you directly to their Spotify pages.{" "}
                <a
                    href="https://open.spotify.com/playlist/4MpGtMsjMWNoJCN9fCgx6m?si=d7b87bbad82846b8"
                    target="_blank"
                >
                    Here's the whole playlist.
                </a>
            </p>
        </div>
    );
};

export default IntroMessage;
