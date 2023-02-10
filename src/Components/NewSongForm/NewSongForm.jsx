import React, {useState} from "react";



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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type = 'text' value={songTitle} onChange={(event) => setSongTitle(event.target.value)}/>
            </div>
            <div>
                <label>Artist</label>
                <input type = 'text' value={songArtist} onChange={(event) => setSongArtist(event.target.value)}/>
            </div>
            <div>
                <label>Album</label>
                <input type = 'text' value={songAlbum} onChange={(event) => setSongAlbum(event.target.value)}/>
            </div>
            <div>
                <label>Release Date</label>
                <input type = 'text' value={songReleaseDate} onChange={(event) => setSongReleaseDate(event.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input type = 'text' value={songGenre} onChange={(event) => setSongGenre(event.target.value)}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
     );
}
 
export default NewSongForm;