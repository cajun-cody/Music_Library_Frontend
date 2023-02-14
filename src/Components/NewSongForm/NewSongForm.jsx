import React, {useState} from "react";
import './NewSong.css';


const NewSongForm = (props) => {

    const [songTitle, setSongTitle] = useState('');
    const [songArtist, setSongArtist] = useState('');
    const [songAlbum, setSongAlbum] = useState('');
    const [songReleaseDate, setSongReleaseDate] = useState('');
    const [songGenre, setSongGenre] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: songTitle,
            artist: songArtist,
            album: songAlbum,
            release_date: songReleaseDate,
            genre: songGenre,
        };
        props.addNewSong(newSong);
    }

    return ( 
        <form className="container-1 " onSubmit={handleSubmit}>
            <div className="container-body-1">
                <div>
                    <h4 className="new-song-head">Add Song</h4>
                </div>
                <div class='row'>
                    <label >Title</label>
                    <input size='50' type = 'text' value={songTitle} onChange={(event) => setSongTitle(event.target.value)}/>
                </div>
                <div class='row'>
                    <label>Artist</label>
                    <input type = 'text' value={songArtist} onChange={(event) => setSongArtist(event.target.value)}/>
                </div>
                <div class='row'>
                    <label>Album</label>
                    <input type = 'text' value={songAlbum} onChange={(event) => setSongAlbum(event.target.value)}/>
                </div>
                <div class='row'>
                    <label>Release Date</label>
                    <input type = 'text' value={songReleaseDate} onChange={(event) => setSongReleaseDate(event.target.value)}/>
                </div>
                <div class='row'>
                    <label>Genre</label>
                    <input type = 'text' value={songGenre} onChange={(event) => setSongGenre(event.target.value)}/>
                </div>
                <div className="new-song-btn">
                    <button class='btn btn-outline-success' type='submit'>Add New Song</button>
                </div>
            </div>
        </form>
     );
}
 
export default NewSongForm;