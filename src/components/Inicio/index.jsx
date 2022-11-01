import React from 'react';
import { useTranslateContext } from '../../context/Context';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBarReal from '../NavBar/Real';
import './styles.css';

const Inicio = () => {

    const {translateHome, addTranslateHome} = useTranslateContext();

    return (
        <>
            <NavBarReal/>
            <div className='main-container'>
                <div className='sub-container'>
                    <h2 className='title-inicio'>PRIMER TEXTO</h2>
                    <h3 className='subtitle-inicio'>EL YAGÁN ES UNA LENGUA MUERTA.</h3>

                    <p className='texto p-50'>La <span className='yagan-word1'>hánis la(n oufkirh</span> yagán no conocía la palabra escrita. "Toda información y todo conocimiento fue transmitido oralmente
                    sobre miles de años. De generación a generación.</p>                   
                    <p className='texto'>En días de 
                    {!translateHome ?                         
                        <Link to='videos' className='yagan-word'>
                            <button 
                                onClick={() => addTranslateHome()}> shakh
                            </button>
                        </Link> 
                        :
                        <span className='es-word'> mal </span>
                    }
                    tiempo, en las largas noches de invierno y en claras tardes de <span className='yagan-word1'> kísi </span> las familias se juntaban 
                    alrededor del <span className='yagan-word1'>pusáki pus(ák</span>, donde los ancianos relataban de la sabiduría de esta cultura, contando historias del origen y cuentos
                    que nos enseñan de valores.</p>
                </div>
            </div>
        </>
    )
}

export default Inicio;