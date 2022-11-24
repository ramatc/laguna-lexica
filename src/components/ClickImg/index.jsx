import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/Fake';
import './styles.css'

const ClickImg = () => {

return (
    <>
        <NavBar/>
        <Link to={'/texto'}>
            hola
        </Link>
    </>
    )
}

export default ClickImg;