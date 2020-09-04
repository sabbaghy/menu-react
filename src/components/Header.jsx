import React from 'react'
import Navegation from './Navegations'

const Header = () => {
   return (
      <div className="border-b p-3 flex justify-between items-center">
         <span className="font-bold text-3xl">LOGO</span>
         <Navegation />
      </div>
   )
}

export default Header
