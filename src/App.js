import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import NewSongForm from './Components/NewSongForm/NewSongForm.jsx';
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

  async function createSong(newSong){
	let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
	if(response.status === 201){
		await getAllSongs();
	}
  }

/* Function to search through the songs list */
  function songResults(search) {
	let filteredSongs = songs.filter((song) => {
		if (song.title.includes(search) || 
			song.artist.includes(search) ||
			song.album.includes(search) ||
			song.genre.includes(search) ){
		return true;
		}	
	})
	setSongs(filteredSongs)
  }
 
  return (
    <div>
		<SearchBar songResults= {songResults}/>
    	<MusicTable parentSongs={songs} />
	  	<NewSongForm addNewSong={createSong}/>
    </div>
  );
}

export default App;
