import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import AddFav from './AddFav';



function MovieList(props) {
 const AddFav = props.AddFav;
  return (
    <div className='container-fluid movie-list'>
      <div className='row '>
      {props.movies.map((movie, index) =>
      <div className='d-flex m-3 mb-10 image-container'>
        <img src={movie.Poster} alt="SORRY..-MOVIE POSTER IS NOT AVAILABLE AT THIS MOMENT"></img>
        <div onClick={()=>props.hanldeFavourite(movie)} className='overlay d-flex align-item-center justify-content-center'>
        <AddFav />
        </div>
      </div>)}
      </div>
    </div>
  )
}

export default MovieList
