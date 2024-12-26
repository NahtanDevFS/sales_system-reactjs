import React from 'react';
import './Home.css';

export default function Home() {

    let name = 'Generic_name';

  return (
    <div className='home-container'>
        <div className='home-title'>Welcome back, {name}</div>
        <div className='home-info'>Here the latest information about the movements in the company:</div>
    </div>
  )
}
