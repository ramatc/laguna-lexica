import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className='navbar'>
                    <Link to="/">
                        <h1 className='logo'>
                           LAGUNA LÉXICA
                        </h1>
                    </Link>
                    <ul>
                        <li><NavLink to="/propuesta">PROPUESTA</NavLink></li>
                        <li><NavLink to="/glosario">GLOSARIO</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
