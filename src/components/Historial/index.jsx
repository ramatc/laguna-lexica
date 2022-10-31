import React from 'react';
import { useTranslateContext } from '../../context/Context';
import NavBarReal from '../NavBar/Real';
import './styles.css';

const Historial = () => {

    const {historial} = useTranslateContext();

    return (
    <>
        <NavBarReal />
        <div className='main-container-real'>
            <h1 className='title-historial'>HISTORIAL</h1>

            <div className='historial-list'>
                {historial.length === 0 ? <h2>NO HAY HISTORIAL DE TRADUCCIONES</h2> :                 
                historial.map((historial, i) => 
                                <div className='historial-wrapper' key={i}>
                                    <p><span>FRASE INGRESADA:</span> {historial.frase}</p>
                                    <p><span>TRADUCCIÓN 01:</span> {historial.translate01}</p>
                                    <p><span>TRADUCCIÓN 02:</span> {historial.translate02}</p>
                                    <p><span>DESCARTE:</span> {historial.descarte}</p>
                                </div>)} 
            </div>
        </div>
    </>
    )
}

export default Historial