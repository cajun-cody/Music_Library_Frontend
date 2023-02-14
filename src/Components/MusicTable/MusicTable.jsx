import './MusicTable.css';


const MusicTable = (props) => {

    

    return ( 
        <div className="container-2">
            <div className="container-table" >
                <div className='container-head'>
                    <div className="row">
                        <h6 class="col">Title</h6>
                        <h6 class="col">Artist</h6>
                        <h6 class="col">Album</h6>
                        <h6 class="col">Release Date</h6>
                        <h6 class="col">Genre</h6>
                        <h6 class="col">Options</h6>
                    </div>
                </div>
                <div className="container-body">
                    {props.parentSongs.map((song) => {
                    return(
                        <div className='row' key={song.id}>
                        <div class="col">{song.title}</div>
                        <div class="col">{song.artist}</div>
                        <div class="col">{song.album}</div>
                        <div class="col">{song.release_date}</div>
                        <div class="col">{song.genre}</div>
                        <div class="col">
                            <button type="button" className='btn btn-outline-danger' onClick={() => props.deleteSongProp(song)}>Delete</button>
                        </div>
                    </div>
                )
            })}
            </div>
            </div>   
        </div>
     );
}
 
export default MusicTable;