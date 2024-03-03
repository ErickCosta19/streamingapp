'use client';
import { useState, useEffect, ChangeEvent } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';


export async function getMovies(search: string) {
    console.log(search)
    const data = await fetch (`https://www.omdbapi.com/?s=${search}&per_page=10&apiKey=e605ff67`)
    const movies = await data.json()
    console.log(movies)
    return movies.Search
  }
  
interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    imdbID: string
}


export function Movies() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
  
    async function handleSearch() {
        const result = await getMovies(search)
        setMovies(result)
    }
     
    function handleInputSearch(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        setSearch(value)
    }

    return (
        <div>
            <h1>Digite para pesquisar</h1>
            <div className='flex flex-row items-center gap-2 max-w-[500px]'>
                <Input type='text' name='search' value={search} onChange={handleInputSearch} className='bg-neutral'/>
                <Button onClick={handleSearch}>Pesquisar</Button>
            </div>
            <ul>
                {movies.map(movie => (
                    <li key={movie.imdbID}>
                        {movie.Title}
                    </li>
                ))}
            </ul>
        </div>
    )
}