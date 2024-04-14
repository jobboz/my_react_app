import './App.css'
import SearchIcon from './Search.svg';
import { useEffect, useState} from "react";
import MovieCard from './MovieCard';




const API_URL = 'http://www.omdbapi.com?apikey=16e7a59d'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


 const getMessage = async (tittle) => {
  const response = await fetch( `${API_URL} &s=${tittle}`)
  const data = await response.json()
  setMovies(data.Search)
 }
  useEffect (() => {
      getMessage('spiderman')
  },[])
  return (
     <div className='app'> 
      <h1 >MovieLand</h1>

      <div className='search'>
        <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='search for movies'  value={searchTerm}/>
        <img src={SearchIcon} alt='search'  onClick={() => getMessage(searchTerm)}/>
      </div>

      {
        movies?.length > 0 
        ? (
          <div className='container'>
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={index}/>
            ))}
         
      </div>
        ) : 
         (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
         )

      }

      

      </div>

  )
}

export default App