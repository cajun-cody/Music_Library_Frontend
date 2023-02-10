import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';



function App() {

  const [songs, setSongs] = useState([])

/* UseEffect function to gather all songs from backend and distribute 
to other components */
  useEffect(() => {
	getAllSongs();
  }, [])

  async function getAllSongs(){
	const response = await axios.get('http://127.0.0.1:8000/api/music/');
	setSongs(response.data);
  }
/* Function to search through the songs list */
  function songResults(search) {
	let filteredSongs = songs.filter((song) => {
		if (song.title.toLowerCase().includes(search) || 
			song.artist.toLowerCase().includes(search) ||
			song.album.toLowerCase().includes(search) ||
			song.genre.toLowerCase().includes(search) ){
		return true;
		}	
	})
	setSongs(filteredSongs)
  }
 
  return (
    <div>
		<SearchBar songResults= {songResults}/>
    	<MusicTable parentSongs={songs} />
	  
    </div>
  );
}

export default App;
