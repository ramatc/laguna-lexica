import React from 'react';
// import OneImg from './OneImg';
import {useNavigate} from 'react-router-dom';
import NavBar from '../NavBar/Fake';
import './styles.css';

import image1 from '../../assets/images/click-img/1.jpg';
import image2 from '../../assets/images/click-img/2.jpg';
import image3 from '../../assets/images/click-img/3.jpg';
import image4 from '../../assets/images/click-img/4.jpg';
import image5 from '../../assets/images/click-img/5.jpg';
import image6 from '../../assets/images/click-img/6.jpg';
import image7 from '../../assets/images/click-img/7.jpg';
import image8 from '../../assets/images/click-img/8.jpg';
import image9 from '../../assets/images/click-img/9.jpg';
import image10 from '../../assets/images/click-img/10.jpg';
import image11 from '../../assets/images/click-img/11.jpg';
import image12 from '../../assets/images/click-img/12.jpg';
import image13 from '../../assets/images/click-img/13.jpg';
import image14 from '../../assets/images/click-img/14.jpg';
import image15 from '../../assets/images/click-img/15.jpg';
import image16 from '../../assets/images/click-img/16.jpg';
import image17 from '../../assets/images/click-img/17.jpg';
import image18 from '../../assets/images/click-img/18.jpg';
import image19 from '../../assets/images/click-img/19.jpg';
import image20 from '../../assets/images/click-img/20.jpg';
import image21 from '../../assets/images/click-img/21.jpg';
import image22 from '../../assets/images/click-img/22.jpg';
import image23 from '../../assets/images/click-img/23.jpg';
import image24 from '../../assets/images/click-img/24.jpg';
import image25 from '../../assets/images/click-img/25.jpg';
import image26 from '../../assets/images/click-img/26.jpg';
import image27 from '../../assets/images/click-img/27.jpg';
import image28 from '../../assets/images/click-img/28.jpg';
import image29 from '../../assets/images/click-img/29.jpg';
import image30 from '../../assets/images/click-img/30.jpg';


const ClickImg = () => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        setTimeout(function(){
            navigate('/texto');
        }, 250);
    }
    
    const handleErrorClick = () => {
        alert("Imagen incorrecta")
    }
    
    // const IMAGENES = [{id: 0, img: image1, funct: handleErrorClick}, {id: 1, img: image2}, {id: 2, img: image3},
    //                 {id: 3, img: image4}, {id: 4,img: image5}, {id: 5, img: image6},
    //                 {id: 6, img: image7}, {id: 7, img: image8}, {id: 8, img: image9},
    //                 {id: 9, img: image10}, {id: 10, img: image11}, {id: 11, img: image12},
    //                 {id: 12, img: image13},{id: 13, img: image14},{id: 14, img: image15},
    //                 {id: 15, img: image16},{id: 16, img: image17},{id: 17, img: image18},
    //                 {id: 18, img: image19},{id: 19, img: image20}];
    
    return (
        <>
            <NavBar/>
            {/* <div className='images-container ht-100 bg-fa'>
            {
                IMAGENES.map(imagen => <OneImg imagen={imagen} key={imagen.id}/>)
            }
            </div> */}
            <div className='images-container ht-100 bg-fa'>
                <img src={image1} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image2} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image4} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image5} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image6} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image7} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image8} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image9} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image10} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image11} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image12} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image3} alt="" onClick={() => {handleClick()}}/>
                <img src={image13} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image14} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image15} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image16} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image17} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image18} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image19} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image20} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image21} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image22} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image23} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image24} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image25} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image26} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image27} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image28} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image29} alt="" onClick={() => {handleErrorClick()}}/>
                <img src={image30} alt="" onClick={() => {handleErrorClick()}}/>
            </div>
        </>
    )
}

export default ClickImg;