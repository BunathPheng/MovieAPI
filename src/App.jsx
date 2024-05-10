import React, { useEffect, useState } from 'react'
import {Route,Routes } from 'react-router-dom';
import List from './assets/components/List';
import Detial from './assets/components/Detial';
const App = () => {
  const [movie ,setmovie] = useState([]);
  const [Search ,setsearch] = useState("");
  const getmovie  = async (Search) =>
  {
      const url = Search ?  "https://api.themoviedb.org/3/search/movie":"https://api.themoviedb.org/3/discover/movie";
      const key = "94af780ac836fda29874bd3b68ce92e3";
      const res =  await fetch(`${url}?api_key=${key}&&query=${Search}`);
      const data = await res.json();
      setmovie(data.results)
      console.log(data);
  }
  useEffect( () =>
  {
       getmovie(Search);
  },[])
  return (
    <div>
       <div className="h-[2rem] flex flex-row justify-center fixed z-20 w-full mt-5 gap-2 items-center">
            <input placeholder='Search movie...' className='rounded-2xl p-3' value={Search} onChange={(e)=>setsearch(e.target.value)}/>
            <button className='p-3 bg-red-500 border-none' onClick={() => {getmovie(Search);
             setsearch("");}
            }>Search</button>
       </div>
       {/* Hav bar */}
       <div className="pt-20">
              <Routes>
                 <Route path='/' element={<List movie={movie}/>}/>
                 <Route path='/detial/:id' element={<Detial/>}/>
              </Routes>
       </div>
    </div>
  )
}
export default App