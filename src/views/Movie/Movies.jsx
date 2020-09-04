import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './Movies.css'

import MovieSearch from './MovieSearch'
import MovieCharacter from './MovieCharacterGrid'


const Movies = () => {

   const [items, setItems] = useState([])
   const [isLoaded, setIsLoaded] = useState(true)
   const [query, setQuery] = useState('')

   useEffect(() => {
      const fetchItems = async () => {
         const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
         setItems(result.data)
         setIsLoaded(false)
      }

      fetchItems()
   }, [query])


   return (
      <div className="container">
         <MovieSearch getQuery={(q) => setQuery(q)} />
         <MovieCharacter isLoaded={isLoaded} items={items} />
      </div>
   );
}

export default Movies;

