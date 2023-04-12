import React from 'react'
import { Link } from 'react-router-dom'


const Favourite = (props) => {
  return (
   
    <div>
      { props.favourite.length>0?<div className="bg-sky-100">
<div className="ml-4 mr-4 uppercase font-black text-purple-900 text-lg border-b-2 border-black "><span>Favourite</span></div>
<div class="relative grid grid-flow-col gap-5 overflow-x-scroll no-scrollbar">
 
{ props.favourite.map((val)=>{
return (
    <div className="w-72 h-108 flex flex-wrap justify-center items-center hover:bg-gray-400 rounded-md">
      <img className="inline w-64 h-68 m-2" src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`} alt="" /><h3 className="m-1">{val.name}</h3>
      <h3 className="m-1">{val.title}</h3>
      <button onClick={()=>props.removeFavouriteMovie(val)} ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="red"
        class="bi bi-x-square"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg></button>
      
  </div>
 
)})}</div>
    </div>:<div className="ml-4 mr-4 uppercase font-black text-purple-900 text-lg border-b-2 border-black "><span>Favourite</span><div>No Movies To Show....<Link to="/"><button className='bg-blue-500 hover:bg-purple-700 text-white  py-1 px-2 rounded-full mx-2 my-1'>Click TO Add</button></Link></div></div>}
    </div>
  )
}

export default Favourite
