import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBarFinal = () => {
    return (
        <header>
            <nav>
                <div className='navbar'>
                    <Link to="/">
                        <h1 className='logo final'>
                           LAGUNA LÉXICA
                        </h1>
                    </Link>
                    <ul>
                        <li><NavLink to="/propuesta">PROPUESTA</NavLink></li>
                        <li><NavLink to="/glosario">GLOSARIO</NavLink></li>
                        {/* <li><NavLink to="/historial">HISTORIAL</NavLink></li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBarFinal;
