import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './Products.css'

import ProductsGrid from './ProductsGrid'

const Products = () => {

   const [items, setItems] = useState([])
   const [isLoaded, setIsLoaded] = useState(true)

   useEffect(() => {
      const buscar = '?s=batman&type=movie'
      const url = `https://www.omdbapi.com/${buscar}&apikey=c52b4a65`;
   
      const fetchItems = async () => {
         const result = await axios(url)
         setItems(result.data.Search)
         setIsLoaded(false)
      }

      fetchItems()
   }, [])


   return (
      <div className="container">
         <ProductsGrid isLoaded={isLoaded} items={items} />
      </div>
   );
}

export default Products;