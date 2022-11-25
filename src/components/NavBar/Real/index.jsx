import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslateContext } from '../../../context/Context';
import './styles.css';

import logo from '../../../assets/images/logo.png';

const NavBarReal = () => {
    
    const {bgClass, ffClass} = useTranslateContext();
    
    return (
        <header className={bgClass ? 'header' : ''}>
            <nav className='title-change'>
                <div className='navbar'>
                    <div className='logo-container'>
                        <img src={logo} alt="Logo Laguna Lexica" className={`logo-img ${ffClass ? '' : 'no-visible'}`}/>
                        <Link to="/" className={`${ffClass ? 'logo2' : 'logo'}`}> 
                            <h1>
                            LAGUNA LÉXICA
                            </h1>
                        </Link>
                    </div>
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
