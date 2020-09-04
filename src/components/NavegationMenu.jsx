import React from 'react'

import NavegationItems from './NavegationItems'

const NavegationMenu = (props) => {
   return (
      <ul>
         <NavegationItems close={props.closeMenu} link="Home"/>
         <NavegationItems close={props.closeMenu} link="About"/>
         <NavegationItems close={props.closeMenu} link="Services"/>
         <NavegationItems close={props.closeMenu} link="Contact"/>
         <NavegationItems close={props.closeMenu} link="Movies"/>
      </ul>
   )
}

export default NavegationMenu