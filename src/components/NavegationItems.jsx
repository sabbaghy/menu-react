import React from 'react'
import { Link } from 'react-router-dom'

const NavegationItems = (props) => {

   const path = (props.link === "Home") ? "" : props.link

   return (
      <li>
         <Link
            to={`/${path}`}
            className="text-blue-500 text-2xl py-5 border-b block"
            onClick={props.close}
         >
            {props.link}
         </Link>
      </li>
   )
}

export default NavegationItems
