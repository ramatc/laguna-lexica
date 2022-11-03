import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/Fake';
import './styles.css'

const Palabras = () => {
  return (
    <div className='ht-100'>  
        <NavBar/>
        <div className='word-wrapper'>
            <Link to='/pesca' className='word-card'>
                PESCA
            </Link>

            <Link to='/tiempo' className='word-card'>
                TIEMPO
            </Link>

            <Link to='/anclaje' className='word-card'>
                ANCLAJE
            </Link>
        </div>
    </div>
  )
}

export default Palabras;