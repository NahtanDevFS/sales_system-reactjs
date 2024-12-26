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
},
{
  name: "Clients",
  href: "/clients",
},];




export default function NavBar() {

  const navigate = useNavigate();

  const onHomeButtonClick = () => {
    navigate('/home');
  }

  const onClientsButtonClick = () => {
    navigate('/clients');
  }

  return (
    <div className='navbar'>
      <div className='lateral-bar'>
          <div className='lateral-bar-container'>
            <div className='lateral-bar-item'>
            <img className='icon-nav' onClick={onHomeButtonClick} src={home} alt="" />
            <img className='icon-nav' onClick={onClientsButtonClick} src={clients} alt="" />
            <img className='icon-nav' src={sells} alt="" />
            <img className='icon-nav' src={stock} alt="" />
            <img className='icon-nav' src={settings} alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}
