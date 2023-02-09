## View the app here: https://upbeat-jelly.surge.sh/

# To run the app

Update the .env file with your Spotify for Developers credentials. You can make an account here: https://developer.spotify.com/

Once you have the .env file set up, from the project directory, run:

### `npm install`

Then run:

### `npm start`


## Features:

- Grabs songs from my Spotify playlist and displays them in a table.
- Clicking on album art, song/artist names will take you to their Spotify page.
- Songs can be sorted alphabetically by song name by clicking the table header.
- You can search the list of songs. It searches using the album, song and artist names.
- You can change how many songs are displayed on each page using the "Songs Per Page" select button.
- If you click any of the pagination buttons below the list of songs, it scrolls to the top of the table.


### Some notes:
- The request to get the access token for the Spotify API would normally be done on the backend since doing it on the front end would be a security issue, but for the purposes of this demo I just did it client side.
- If there was a big dataset I would probably handle the pagination/search using urls coming from a backend but for this smaller dataset I just did it on the front end.
