import React from 'react';
import './Home.css';
import Card from '../../Card/Card';

export default function Home() {

    let name = 'Generic_name';

  return (
    <div className='home-container'>
        <div className='home-title'>Welcome back, {name}</div>
        <div className='home-info'>Here the latest information about the movements in the company:</div>
        <div className='cards'>
          <Card title='Total clients' info='357' btnText='Go to clients' link='Clients' />
          <Card title='Total sales' info='Q 5000' btnText='Go to sales' link='Home' />
          <Card title='Total products' info='500' btnText='Go to products' link='Home' />
          <Card title='Most saled product' info='Mouse razer' btnText='Go to products' link='Home' />
        </div>
    </div>
  )
}
