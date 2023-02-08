import React, { useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';



function App() {

  const [songs, setSongs] = useState([])
 
  return (
    <div>
      <MusicTable parentSongs={songs} setSongs={setSongs}/>
    </div>
  );
}

export default App;
