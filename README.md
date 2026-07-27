# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# useState usage react

import React from 'react'
import MovieCard from '../Components/MovieCard'
import { useState } from 'react'

const Home = () => {

    const [searchQuery,setSearchQuery] = useState("");

    const movies = [
        {id:1,title:"john wick",release_date:"2020"},
        {id:2,title:"Terminator",release_date:"199"},
        {id:3,title:"The matrix",release_date:"1998"},
        {id:4,title:"Intersteller",release_date:"2014"}
    ]

    const handelSearch =()=>{
        e.preventDefalut()
        alert(searchQuery)
        setSearchQuery("")
    };

  return (
    <div className='home'>
        <form onSubmit={handelSearch} className='search-form'>
            <input type='text'
            placeholder='Search for movies...'
            className='search-input'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <button type='submit' className='search-button'>Search</button>
        </form>

        <div className='movis-grid'>
            {
            movies.map(movie=>(
                movie.title.toLowerCase().startsWith(searchQuery) &&
            <MovieCard 
            movie={movie} 
            key={movie.id}  />
        ))}
        </div>
    </div>
  )
}

export default Home


http://www.omdbapi.com/?i=tt3896198&apikey=fc81cef2

http://www.omdbapi.com/?apikey=[yourkey]& 
http://img.omdbapi.com/?apikey=[yourkey]&