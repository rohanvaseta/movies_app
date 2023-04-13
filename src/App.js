/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState,useEffect } from "react"
import axios from "axios"
import './App.css';
import Favourite from "./Components/Favourite";
import {
  Route,
  BrowserRouter as Router,Routes,
} from "react-router-dom"
import Header from "./Components/Header";
import SearchMovies from "./Components/SearchMovies";
import TreandingMovies from "./Components/TreandingMovies";
import TvSeries from "./Components/TvSeries";




function App() { 
   const [MoviesData, setMoviesData] = useState([]);
   const [tvData,setTvData] = useState([]);
   const [searchData, setSearchData] = useState([]);
   const [searchValue, setSearchValue] = useState("");
   const [favourite, setFavourite] = useState([]);  
  

   const getMovies = async()=>{
      await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3b934b5bd5e1fedf5234da3c3ddda439')
      .then(res=>setMoviesData(res.data.results))
      .catch(err=>console.log(err))
   } 

   const getTvData = async()=>{
    await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=3b934b5bd5e1fedf5234da3c3ddda439')
    .then(res=>setTvData(res.data.results))
    .catch(err=>console.log(err))
   }
   const getSearchData = async()=>{
    await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=3b934b5bd5e1fedf5234da3c3ddda439&language=en-US&query=${searchValue}&page=1&include_adult=false`)
    .then(res=>setSearchData(res.data.results))
    .catch(err=>console.log(err))
   }
   const addFavoriteMovie = (movie)=>{
    const newFavoutiteList = [...favourite,movie]
    setFavourite(newFavoutiteList)

  }
  const removeFavouriteMovie = (movie) =>{
    const newFavoutiteList = favourite.filter(
      (favourite)=>favourite.id !== movie.id);
      setFavourite(newFavoutiteList)
    
  }
 
 

   useEffect(() => {
    getMovies();
    getTvData()
    getSearchData()
    
  
   });


  return (
   
    <div className="bg-gradient-to-r from-violet-200 to-pink-200">
      <Router>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchMovies searchData={searchData} addFavoriteMovie={addFavoriteMovie}/>
      <Routes>
      <Route path="/" element={<>
      <TreandingMovies MoviesData={MoviesData} addFavoriteMovie={addFavoriteMovie} />
      <TvSeries tvData={tvData} addFavoriteMovie={addFavoriteMovie} /></>} />
      </Routes><Routes>
      <Route path="/Favourite" element={<Favourite favourite={favourite} removeFavouriteMovie={removeFavouriteMovie}/>} />
      </Routes>
      </Router>
    </div>
   
   
  );
}

export default App;
