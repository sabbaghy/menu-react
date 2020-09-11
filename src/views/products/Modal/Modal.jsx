import React, { useState } from 'react'; 

import './Modal.css'

export default function Modal() {

   const [display, setDisplay] = useState(false)

   const closeModal = () => setDisplay(false)

   if(display) {
      return (
         <section className="modal-wrapper">
            <div
               className="modal-backdrop"
               onClick={console.log('cerramodal')}
            />
            <div className="modal-box"> 
               <button className='btn'> Open</button>
         </div>
      </section>
      )
   }
   return (null)

}
