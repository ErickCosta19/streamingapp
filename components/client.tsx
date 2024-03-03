'use client';
import { useState, useEffect, ChangeEvent } from 'react';

export async function getMovies(search: string) {
    console.log(search)
    const data = await fetch (`http://www.omdbapi.com/?s=${search}&per_page=10&apiKey=e605ff67`)
    const movies = await data.json()
    return movies.Search
  }
  
interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
}


export function Client() {
    const [search, setSearch] = useState('');
  
    async function handleSearch() {
        const result = await getMovies(search)
        console.log(result)
    }
     
    function handleInputSearch(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        setSearch(value)
    }

    return (
        <div>
            <h1>Digite para pesquisar</h1>
            <input type='text' name='search' value={search} onChange={handleInputSearch} className='bg-neutral'/>
            <button onClick={handleSearch}>Pesquisar</button>
        </div>
    )
}