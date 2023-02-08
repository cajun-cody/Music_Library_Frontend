import React, { useState,} from 'react';
import MusicTable from './Components/MusicTable/MusicTable';


function App() {

  const [entries, setEntries] = useState([{title: 'Hey Jude', artist: 'Beatles', album: 'White', release_date: '10/10/56', genre: 'rock'}])

  return (
    <div>
      <App parentEntries={entries}/>
    </div>
  );
}

export default App;
