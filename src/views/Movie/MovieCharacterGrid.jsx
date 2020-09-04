import React from 'react'
import MovieCharacterItem from './MovieCharacterItems'
import Spinner from './MovieSpinner'

const CharacterGrid = ({items, isLoaded}) => {
   return isLoaded ? (<Spinner />) : (<section className="cards">
         
         {items.map( (item) => (
            <MovieCharacterItem key = {item.char_id} item={item} />
         ))}
      </section>
   )
}

export default CharacterGrid
