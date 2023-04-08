import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

function SearchBox(props) {
  
  return (
    <div className='input-group col col-sm-4'>
        <input className='form-control text-light bg-dark'
        type="search"
            value={props.search}
            onChange={(event)=> props.setSearchValue(event.target.value)}
         placeholder='Type To Search...'></input>

         </div>
  )
}

export default SearchBox
