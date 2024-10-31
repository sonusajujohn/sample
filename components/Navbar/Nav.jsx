import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import './Nav.css'

const Nav = () => {
    const [state,setState]=useState('Home');

  return (
    <div className='Nav'>
        <img src={assets.logo} alt="logo" />
        <div id='head'>CineTick</div>
        <ul className='Navmenu'>
            <li onClick={()=>{setState("Home")}} className={state==='Home'?'active':''}>Home</li>
            <li onClick={()=>{setState("Movies")}} className={state==='Movies'?'active':''}>Now Showing</li>
            <li onClick={()=>{setState("Theatre")}} className={state==='Theatre'?'active':''}>Theatres</li>
            <li onClick={()=>{setState("Aboutus")}} className={state==='Aboutus'?'active':''}>Aboutus</li>
        </ul>
        <div className="Navright">
            <img id='img' src={assets.search} alt="searchicon" />
            <button>
             <img id="icon" src={assets.user} alt="user icon" />
                 Sign in
            </button>
        </div>

    </div>
  )
}

export default Nav