import React from 'react'

import Modal from './Modal/Modal'

const ProductsItem = ({item}) => {

   const showDetais = (ID) => {

      console.log('esta es el detalle', ID)
   }

   return (
      <>
         <Modal />
         <div className='card'>
            <div className='card-inner'>
               <div className='card-front'> <img src={item.Poster} alt='' /> </div>
               <div className='card-back'>
                  <h1>{item.name}</h1>
                  <ul>
                     <li><strong>Title:</strong> {item.Title}</li>
                     <li><strong>Year:</strong> {item.Year}</li>
                     <li><strong>Type:</strong> {item.Type}</li>
                     <li><strong>imdbID:</strong> {item.imdbID}</li>
                  </ul>
                  <button
                     className="btn"
                     onClick={() => showDetais(item.imdbID)}
                  >
                     Show More
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default ProductsItem