import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = (props) => {

    const [search, setSearch] = useState([])

    const refresh = () => window.location.reload(true)

    function handleSubmit(event){
        event.preventDefault();
        props.songResults(search)
        }
    
        return ( 
        <form class='d-flex justify-content-center align-content-center width: 50%' onSubmit={handleSubmit}>
            <div className="search">
                <input size='50' value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Enter title,artist,album or genre...'></input>
            </div>
            <div className="search-button">
                <button class='btn btn-outline-success' type='submit'>Search</button>
            </div>
            <div className="refresh-button">
                <button class="btn btn-outline-success glyphicon glyphicon-refresh" onClick={refresh}>Refresh</button>
            </div>
        </form>
     );
}
 
export default SearchBar;



 
