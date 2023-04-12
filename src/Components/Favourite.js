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
  <div  className="w-72 h-108 flex flex-wrap justify-center items-center hover:bg-gray-400 rounded-md">
  <img className="inline w-64 h-68 mt-3 mb-0" src={`https://image.tmdb.org/t/p/w500/${val.poster_path}`} alt="" />
  <div className='w-48'><h3 className="">{val.title}</h3>
  <button onClick={()=>props.removeFavoriteMovie(val)} className='bg-red-200 rounded-lg px-2'>Remove &hearts;</button>
  </div>
 
</div>
 
)})}</div>
    </div>:<div className="ml-4 mr-4 uppercase font-black text-purple-900 text-lg border-b-2 border-black "><span>Favourite</span><div>No Movies To Show....<Link to="/"><button className='bg-blue-500 hover:bg-purple-700 text-white  py-1 px-2 rounded-full mx-2 my-1'>Click TO Add</button></Link></div></div>}
    </div>
  )
}

export default Favourite
