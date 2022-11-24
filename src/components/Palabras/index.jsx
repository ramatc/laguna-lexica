import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/Fake';
import './styles.css'

const Palabras = () => {
  return (
    <div className='ht-100'>  
        <NavBar/>
        <div className='word-wrapper'>
            <Link to='/pesca' className='word-card' data-aos="fade-up" data-aos-duration="1000">
                PESCA
            </Link>

            <Link to='/territorio' className='word-card' data-aos="fade-up" data-aos-duration="2000">
                TERRITORIO
            </Link>

            <Link to='/navegar' className='word-card' data-aos="fade-up" data-aos-duration="3000">
                NAVEGAR
            </Link>
        </div>
    </div>
  )
}

export default Palabras;