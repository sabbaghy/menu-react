import React from 'react'
import ProductsItem from './ProductsItem'
import Spinner from '../Movie/MovieSpinner'

const ProductsGrid = ({items, isLoaded}) => {
   return isLoaded ? (<Spinner />) : (<section className="cards">
         
         {items.map( (item,index ) => (
            <ProductsItem key = {index} item={item} />
         ))}
      </section>
   )
}

export default ProductsGrid