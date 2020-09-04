import React from 'react'
import { useState } from 'react'

const Count = () => {

   const[contador, setContador] = useState(0)
   
   return (
      <div>
         <h2 onClick={() => setContador(contador + 1)}> Sumar </h2>
         <h1>{contador}</h1>
         <h2 onClick={() => setContador(contador - 1)}> Restar </h2>
      </div>
   )
}

export default Count
