import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../NavBar/Fake';
import './styles.css'

import img1 from '../../../assets/images/busqueda/1/1.jpg';
import img2 from '../../../assets/images/busqueda/1/2.jpg';
import img3 from '../../../assets/images/busqueda/1/3.jpg';
import img4 from '../../../assets/images/busqueda/1/4.jpg';
import img5 from '../../../assets/images/busqueda/1/5.jpg';
import img6 from '../../../assets/images/busqueda/1/6.jpg';
import img7 from '../../../assets/images/busqueda/1/7.jpg';
import img8 from '../../../assets/images/busqueda/1/8.jpg';
import img9 from '../../../assets/images/busqueda/1/9.jpg';
import gif from '../../../assets/images/loading.gif';

const Palabras = () => {

    const navigate = useNavigate();

    const [imgA, setImgA] = useState(0);
    const [imgB, setImgB] = useState(0);
    const [imgC, setImgC] = useState(0);
    const [imgD, setImgD] = useState(0);
    const [imgE, setImgE] = useState(0);
    const [imgF, setImgF] = useState(0);
    const [imgG, setImgG] = useState(0);
    const [imgH, setImgH] = useState(0);
    const [imgI, setImgI] = useState(0);
    const [loading, setLoading] = useState('not-loading');

    const checkA = () => {
        setImgA(1);
        if (imgA > 0){
            setImgA(0);
        };
    }

    const checkB = () => {
        setImgB(1);
        if(imgB > 0){
            setImgB(0);
        }
    }

    const checkC = () => {
        setImgC(1);
        if(imgC > 0){
            setImgC(0);
        }
    }

    const checkD = () => {
        setImgD(1);
        if(imgD > 0){
            setImgD(0);
        }
    }

    const checkE = () => {
        setImgE(1);
        if(imgE > 0){
            setImgE(0);
        }
    }

    const checkF = () => {
        setImgF(1);
        if(imgF > 0){
            setImgF(0);
        }
    }

    const checkG = () => {
        setImgG(1);
        if(imgG > 0){
            setImgG(0);
        }
    }

    const checkH = () => {
        setImgH(1);
        if(imgH > 0){
            setImgH(0);
        }
    }

    const checkI = () => {
        setImgI(1);
        if(imgI > 0){
            setImgI(0);
        }
    }

    const handleValidate = () => {
        setLoading('is-loading');
        setTimeout (()=> {
            setLoading('not-loading');
            if (imgA === 0 && imgB > 0 && imgC > 0 && imgD > 0 && imgE === 0 && imgF === 0 && imgG === 0 && imgH === 0 && imgI === 0){
                // document.getElementById("mensaje").style.color = "green";
                // document.getElementById("mensaje").innerHTML = "¡Aprobado!";
                setTimeout (()=>{
                    navigate('/final');
                }, .300);
            } else{
                setImgA(0);
                setImgB(0);
                setImgC(0);
                setImgD(0);
                setImgE(0);
                setImgF(0);
                setImgG(0);
                setImgH(0);
                setImgI(0);
                alert("Incorrecto");
            }
            // else {
            //     document.getElementById("mensaje").innerHTML = "¡Error!";
            //     setTimeout (()=>{
            //         document.getElementById("mensaje").innerHTML = "";
            //     }, 3000);
            // }
        }, 2000);
    };

    return (
        <div className='ht-100'>  
            <NavBar/>
            <p className='search-text'>Seleccioná las 3 imágenes que contengan elementos de pesca</p>
            <div className='search-wrapper'>
                <div className={`search-card ${imgA > 0 ? 'selected' : 'no-selected'}`}>
                    <img 
                        src={img1}   
                        onClick={() => checkA()}
                        alt='Imagen Yaganes'/>
                </div>

                <div className={`search-card ${imgB > 0 ? 'selected' : 'no-selected'}`}>
                    <img 
                        src={img2}  
                        onClick={() => checkB()}
                        alt='Imagen Yaganes'/>
                </div>

                <div className={`search-card ${imgC > 0 ? 'selected' : 'no-selected'}`}>
                    <img 
                        src={img3}  
                        onClick={() => checkC()}
                        alt='Imagen Yaganes'/>
                </div>

                <div className={`search-card ${imgD > 0 ? 'selected' : 'no-selected'}`}>
                    <img 
                        src={img4}  
                        onClick={() => checkD()}
                        alt='Imagen Yaganes'/>
                </div>

                <div className={`search-card ${imgE > 0 ? 'selected' : 'no-selected'}`}>
                    <img 
                        src={img5}  
                        onClick={() => checkE()}
                        alt='Imagen Yaganes'/>
                </div>

                <div className={`search-card ${imgF > 0 ? 'selected' : 'no-selected'}`}>
                    <img 
                        src={img6}  
                        onClick={() => checkF()}
                        alt='Imagen Yaganes'/>
                </div>

                <div className={`search-card ${imgG > 0 ? 'selected' : 'no-selected'}`}>
                    <img 
                        src={img7}  
                        onClick={() => checkG()}
                        alt='Imagen Yaganes'/>
                </div>

                <div className={`search-card ${imgH > 0 ? 'selected' : 'no-selected'}`}>
                    <img 
                        src={img8}  
                        onClick={() => checkH()}
                        alt='Imagen Yaganes'/>
                </div>

                <div className={`search-card ${imgI > 0 ? 'selected' : 'no-selected'}`}>
                    <img 
                        src={img9}
                        onClick={() => checkI()}
                        alt='Imagen Yaganes'/>
                </div>
                <button 
                    onClick={() => handleValidate()}
                    className='btn'
                >
                    VALIDAR RESPUESTA
                    <img src={gif} className={loading} alt='Loading'/>
                </button>
            </div>
        </div>
    )
}

export default Palabras;