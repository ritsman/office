import React from 'react'
import {Form, useSearchParams} from 'react-router-dom'


const Body = () => {
  const [searchParams, setSearchParams]=useSearchParams();
  const handleSearch = (e)=> {
    e.preventDefault();
    alert(searchParams.get('q'))
  }
  return (
    <div>
      <h1>Search here</h1>
     <Form onSubmit={handleSearch}>
      <label >Search</label>
      <input type="text" placeholder='search'  onChange={(e)=> setSearchParams({q:e.target.value})}/>
      <br /><br />
      <button>search</button>
     </Form>
    </div>
  )
}

export default Body;
