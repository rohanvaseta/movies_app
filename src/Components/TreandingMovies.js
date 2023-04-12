import React from 'react'

const TreandingMovies = (props) => {
  return (
    <div>
      <div className="bg-indigo-200">
<div className="ml-4 mr-4 uppercase font-black text-purple-900 text-lg border-b-2 border-black "><span>TRENDING MOVIES</span></div>
<div class="relative grid grid-flow-col gap-5 overflow-x-scroll no-scrollbar">
 
{ props.MoviesData.map((val)=>{
return (
  <div  className="w-72 h-108 flex flex-wrap justify-center items-center hover:bg-gray-400 rounded-md">
  <img className="inline w-64 h-68 mt-3 mb-0" src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`} alt="" />
  <div className='w-48'><h3>{val.title}</h3>
  <button onClick={()=>props.addFavoriteMovie(val)} className='bg-red-200 rounded-lg px-2'>Add To fav &hearts;</button>
  </div>
 
</div>
)})}</div>
    </div>
    </div>
  )
}

export default TreandingMovies
