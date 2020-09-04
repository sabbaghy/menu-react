import React from 'react'
import spinner from '../../assets/img/logos/spinner.gif'

const MovieSpinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default MovieSpinner