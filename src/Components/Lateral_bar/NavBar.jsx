import React from 'react'
import './NavBar.css';
import home from '../Assets/home.png';
import clients from '../Assets/user.png';
import sells from '../Assets/kart.png';
import stock from '../Assets/stock.png';
import settings from '../Assets/settings.png';
import { Link, useNavigate } from 'react-router-dom';

const pages = [{
  name: "Home",
  href: "/home",
},];


export default function NavBar() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='lateral-bar'>
          <div className='lateral-bar-container'>
            <div className='lateral-bar-item'>
            <img className='icon' src={home} alt="" />
            <img className='icon' src={clients} alt="" />
            <img className='icon' src={sells} alt="" />
            <img className='icon' src={stock} alt="" />
            <img className='icon' src={settings} alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}
