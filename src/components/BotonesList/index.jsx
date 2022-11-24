import React from 'react';
import Botones from '../Botones'
import NavBar from '../NavBar/Fake';
import './styles.css'

const BotonesList = () => {
    const BOTONES = [{id: 0, definition: 'Marcar con un hacha el suelo'}, {id: 1, definition: 'Dejar un árbol cargado de hongos'}, {id: 2, definition: 'Cortar un árbol a la mitad'},
                    {id: 3, definition: 'Dibujar sobre un árbol'}, {id: 4, definition: 'Encontrar un árbol perdido'}, {id: 5, definition: 'Encontrar comfort y confianza en la compañía cercana de un amigo'},
                    {id: 6, definition: 'Dibujar para dejar una marca'}, {id: 7, definition: 'Marcar un árbol como apropiado para hacer lanzas'}, {id: 8, definition: 'Recorrer para encontrar algo'},
                    {id: 9, definition: 'Encontrar fácil un árbol'}, {id: 10, definition: 'Marcar un árbol para encontrarlo más fácil'}, {id: 11, definition: 'Marcar un árbol con un hacha para encontrarlo más facil'},
                    {id: 12, definition: 'Marcar un árbol para encontrarlo'},{id: 13, definition: 'Encontrar mientras se rema'},{id: 14, definition: 'Cortar un árbol con un hacha'},
                    {id: 15, definition: 'Encontrar un árbol cortado'},{id: 16, definition: 'Encontrar algo y entregarlo'},{id: 17, definition: 'Marcar un árbol con un hacha'},
                    {id: 18, definition: 'Marcar con un corte'},{id: 19, definition: 'Encontrar un árbol marcado'}];

    return (
        <>
            <NavBar/>
            <div className='ht-100 bg-fa'>
                <div className='main-btn-container'>
                    {
                        BOTONES.map(boton => <Botones boton={boton} key={boton.id}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default BotonesList;