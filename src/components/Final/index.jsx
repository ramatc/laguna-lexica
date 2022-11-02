import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/Fake';
import './styles.css'

const Final = () => {
  return (
    <>
        <NavBar />
        <div className='ht-100'>
            <div className='main-container'>
                <div className='sub-container'>
                    <h2 className='word-yagan'>AKUPAIA-NGAIA</h2>
                    <div className='final-container'>
                        <p className='final-definition'>MARCAR UN ÁRBOL CON UN HACHA PARA ENCONTRARLO MÁS FÁCIL</p>
                    </div>
                    <Link to="/" className='margin-auto link-final'>
                            Continuar
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Final;