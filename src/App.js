import  React ,{useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFav from './components/AddFav';
import RemoveFav from './components/RemoveFav';

function App() {
  const [favourite, setFavourite] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async(searchValue) =>{
    const url=`https://www.omdbapi.com/?s=${searchValue}&apikey=64ace095`

    const response = await fetch(url)
    const responseJson = await response.json()
    if (responseJson.Search){
      setMovies(responseJson.Search)
    }else{}
  }

    useEffect(() => {
      getMovieRequest(searchValue);
    }, [searchValue]);
 
  const addFavoriteMovie = (movie)=>{
    const newFavoutiteList = [...favourite,movie]
    setFavourite(newFavoutiteList)

  }
  const removeFavouriteMovie = (movie) =>{
    const newFavoutiteList = favourite.filter(
      (favourite)=>favourite.imdbID !== movie.imdbID);
      setFavourite(newFavoutiteList)
    
  }
  return (
    <div className="container-fluid ">
    <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading="Ro-1 Movies"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row' >
      <MovieList movies={movies} hanldeFavourite={addFavoriteMovie} AddFav={AddFav} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading="Favourite"/>
          </div>
          <div className='row' >
          <MovieList movies={favourite} hanldeFavourite={removeFavouriteMovie} AddFav={RemoveFav} />
          </div>
      
    </div>
  );
}

export default App;
