import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslateContext } from '../../context/Context';
import NavBar from '../NavBar/Fake';
import './styles.css';

const CAMINOS = [{title: 'TSTUR-AMALA', subtitle: 'SALIR A PESCAR AL ATARDECER DE FORMA TAL QUE EL DÍA ACABE MIENTRAS UNO ESTÁ OCUPADO'}, {title: 'AKUPAIA-NGAIA', subtitle: 'MARCAR UN ÁRBOL CON UN HACHA PARA ENCONTRARLO MÁS FÁCIL'}, {title: 'IÛŠA-TÃSIN', subtitle: 'UN LUGAR AGRADABLE PARA EL DESEMBARCO EN UNA COSTA ABRUPTA, SIENDO MENOS AUDAZ QUE EN OTROS LUGARES'}]

const Final = () => {

    const {road} = useTranslateContext();

    return (
        <>
            <NavBar />
            <div className='ht-100'>
                <div className='main-container'>
                    <div className='sub-container'>
                        <h2 className='word-yagan'>{CAMINOS[road].title}:</h2>
                        <div className='final-container'>
                            <p className='final-definition'>{CAMINOS[road].subtitle}</p>
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