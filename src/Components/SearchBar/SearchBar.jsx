import React, { useState } from "react";

const SearchBar = (props) => {

    const [search, setSearch] = useState([])

    function handleSubmit(event){
        event.preventDefault();
        props.songResults(search)
        }
    
        return ( 
        <form onSubmit={handleSubmit}>
            <div className="search">
                <input value={search} onChange={(event) => setSearch(event.target.value)}></input>
            </div>
            <div className="search-button">
                <button class='btn' type='submit'>Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;



 
