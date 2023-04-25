import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import NewSongForm from "./Components/NewSongForm/NewSongForm.jsx";
import axios from "axios";
import "./App.css";
import { URL_HOST } from "./urlHost";

function App() {
  const [songs, setSongs] = useState([]);

  /* UseEffect function to gather all songs from backend and distribute 
to other components */
  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get(`${URL_HOST}/api/music/`);
    setSongs(response.data);
  }

  async function createSong(newSong) {
    let response = await axios.post(`${URL_HOST}/api/music/`, newSong);
    if (response.status === 201) {
      await getAllSongs();
    }
  }

  /* Function to search through the songs list */
  function songResults(search) {
    let filteredSongs = songs.filter((song) => {
      if (
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase()) ||
        song.album.toLowerCase().includes(search.toLowerCase()) ||
        song.genre.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      }
    });
    setSongs(filteredSongs);
  }

  async function deleteSong(song) {
    let response = await axios.delete(`${URL_HOST}/api/music/${song.id}/`);
    getAllSongs();
  }

  return (
    <div className="container-page">
      <NavBar />
      <SearchBar songResults={songResults} />
      <NewSongForm addNewSong={createSong} />
      <MusicTable parentSongs={songs} deleteSongProp={deleteSong} />
    </div>
  );
}

export default App;
