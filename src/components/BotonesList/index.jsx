import React from 'react';
import Botones from '../Botones'
import NavBar from '../NavBar/Fake';
import './styles.css'

const BotonesList = () => {
    const BOTONES = [{id: 0, definition: 'DEFINICION'}, {id: 1, definition: 'DEFINICION'}, {id: 2, definition: 'DEFINICION'},
                    {id: 3, definition: 'DEFINICION'}, {id: 4, definition: 'DEFINICION'}, {id: 5, definition: 'DEFINICION'},
                    {id: 6, definition: 'DEFINICION'}, {id: 7, definition: 'DEFINICION'}, {id: 8, definition: 'DEFINICION'},
                    {id: 9, definition: 'DEFINICION'}, {id: 10, definition: 'DEFINICION'}, {id: 11, definition: 'DEFINICION'},
                    {id: 12, definition: 'DEFINICION'},{id: 13, definition: 'DEFINICION'},{id: 14, definition: 'DEFINICION'},
                    {id: 15, definition: 'DEFINICION'},{id: 16, definition: 'DEFINICION'},{id: 17, definition: 'DEFINICION'},
                    {id: 18, definition: 'DEFINICION'},{id: 19, definition: 'DEFINICION'},{id: 20, definition: 'DEFINICION'},
                    {id: 21, definition: 'DEFINICION'},{id: 22, definition: 'DEFINICION'},{id: 23, definition: 'DEFINICION'},
                    {id: 24, definition: 'DEFINICION'},{id: 25, definition: 'DEFINICION'},{id: 26, definition: 'DEFINICION'},
                    {id: 27, definition: 'DEFINICION'},{id: 28, definition: 'DEFINICION'},{id: 29, definition: 'DEFINICION'},
                    {id: 30, definition: 'DEFINICION'},{id: 31, definition: 'DEFINICION'},{id: 32, definition: 'DEFINICION'},
                    {id: 33, definition: 'DEFINICION'}, {id: 34, definition: 'DEFINICION'}];

    const random = Math.floor(Math.random() * 35);

    return (
        <>
            <NavBar/>
            <div className='main-btn-container'>
                {
                    BOTONES.map(boton => <Botones boton={boton} key={boton.id} random={random}/>)
                }
            </div>
        </>
    )
}

export default BotonesList;