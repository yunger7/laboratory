import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    {id: 1, title: "Almost home"},
    {id: 2, title: "Memory Gospel"},
    {id: 3, title: "The wild darkness"}
  ]);

  const addSong = (title) => {
    setSongs([...songs, { id: uuidv4(), title }])
  }

  useEffect(() => {
    console.log('useEffect hook ran', songs);
  }, [songs])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{ song.title }</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}
 
export default SongList;