import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import {useTransition, animated} from 'react-spring'
import NavegationMenu from './NavegationMenu'

const Navegation = () => {
   const [showMenu, setShowMenu] = useState(false)
   
   const maskTransitions = useTransition(showMenu, null, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
   })

   const menuTransitions = useTransition(showMenu, null, {
      from: { opacity: 0, transform: 'translateX(-100%)' },
      enter: { opacity: 1, transform: 'translateX(0%)' },
      leave: { opacity: 0, transform: 'translateX(-100%)' },
   })

   return (
      <nav className="">
         <span className="text-2xl z-100">
            <FontAwesomeIcon 
               icon={faBars}
               onClick={() => setShowMenu(!showMenu)}
            />
         </span>
         {/* {showOverlay}
         {show} */}
         {
            maskTransitions.map(({ item, key, props }) =>
               item && 
               <animated.div
                  key={key}
                  style={props}
                  className="bg-black-trans fixed top-0 left-0 w-full h-full"
                  onClick={() => setShowMenu(false)}
               >
               </animated.div>
            )
         }
         {
            menuTransitions.map(({ item, key, props }) =>
               item && 
               <animated.div
                  key={key}
                  style={props}
                  className="fixed bg-white top-0 left-0 w-2/5 h-full z-50 shadow p-3"
               >
                  <NavegationMenu closeMenu={() => setShowMenu(false)} />
               </animated.div>
            )
         }

      </nav>
   )
}

export default Navegation
