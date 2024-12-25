import React from 'react'
import './Header.css';
import menu from '../Assets/menu.png';
import logout from '../Assets/exit.png';

export default function Component_header() {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-subcontainer1'>
          <img className='icon-header' src={menu} alt="" />
        </div>
        <div className='header-subcontainer2'>
          <img className='icon-header-colored' src={logout} alt="" />
        </div>
      </div>
    </div>
  )
}
