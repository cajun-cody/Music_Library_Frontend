import React, { useEffect } from "react";
import axios from "axios";


const MusicTable = (props) => {

    

    return ( 
        <div>
            <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.parentSongs.map((song) => {
                return(
                <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                 </tr>
                )
            })}
            </tbody>
            </table>   
        </div>
     );
}
 
export default MusicTable;