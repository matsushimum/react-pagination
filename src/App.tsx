import { useEffect, useState } from 'react'
import './App.css'
import Album from './type';
import Pagination from './Pagination';

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);

  //↓APIFecthのやり方
  useEffect(()=>{
    const getAlbums = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res)=>res.json())
      .then((album)=>setAlbums(album));
    };
    getAlbums();
  },[]);

  return (
    <div className="App">
      <Pagination albums={albums} />
    </div>
  )
}

export default App;
