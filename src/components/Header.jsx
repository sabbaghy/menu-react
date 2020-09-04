import React from 'react'
import Navegation from './Navegations'

const Header = () => {
   return (
      <div className="border-b p-3 flex justify-between items-center">
         <span className="font-bold font-lucky text-3xl">TAGUARA DIGITAL</span>
         <Navegation />
      </div>
   )
}

export default Header
