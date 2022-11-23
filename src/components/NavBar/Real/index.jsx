import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslateContext } from '../../../context/Context';
import './styles.css';

const NavBarReal = () => {
    
    const {bgClass} = useTranslateContext();
    
    return (
        <header className={bgClass ? 'header' : ''}>
            <nav>
                <div className='navbar'>
                    <Link to="/">
                        <h1 className='logo'>
                           LAGUNA LÉXICA
                        </h1>
                    </Link>
                    <ul>
                        <li><NavLink to="/propuesta">PROPUESTA</NavLink></li>
                        <li><NavLink to="/traductor">TRADUCTOR</NavLink></li>
                        <li><NavLink to="/glosario">GLOSARIO</NavLink></li>
                        <li><NavLink to="/historial">HISTORIAL</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBarReal;
