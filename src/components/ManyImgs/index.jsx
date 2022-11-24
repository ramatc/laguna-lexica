import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/Fake';

import img1 from '../../assets/images/images-random/1.jpg';
import img2 from '../../assets/images/images-random/2.png';
import img3 from '../../assets/images/images-random/3.jpg';
import img4 from '../../assets/images/images-random/4.jpg';
import img5 from '../../assets/images/images-random/5.png';
import img6 from '../../assets/images/images-random/6.png';
import img7 from '../../assets/images/images-random/7.jpg';
import img8 from '../../assets/images/images-random/8.png';
import img9 from '../../assets/images/images-random/9.jpg';
import img10 from '../../assets/images/images-random/10.jpg';
import img11 from '../../assets/images/images-random/11.jpg';

const ManyImgs = () => {
    const initial = Math.floor(Math.random() * 11); 
    const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
    
    const navigate = useNavigate();
    
    const [click, setClick] = useState(false);
    const [random, setRandom] = useState(initial);

    const handleImages = () => {
        setClick(true);

        let imgMoving;

        imgMoving = setInterval(function(){
            setRandom(Math.floor(Math.random()*11));
        }, 1000/4);

        setTimeout(function(){
            clearInterval(imgMoving);
            imgMoving = setInterval(function(){
                setRandom(Math.floor(Math.random()*11));
            }, 1000/12);
        }, 6000);

        setTimeout(function(){
            clearInterval(imgMoving);
            imgMoving = setInterval(function(){
                setRandom(Math.floor(Math.random()*11));
            }, 1000/25);
        }, 12000);

        setTimeout(function(){
            clearInterval(imgMoving);
            imgMoving = setInterval(function(){
                setRandom(Math.floor(Math.random()*11));
            }, 1000/60);
        }, 16000);

        setTimeout(function(){
            navigate('/botones');
        }, 13000);
    }

    return (
        <>
            <NavBar/>
            <div className='ht-100 bg-fa'>
                <div className='main-container'>
                    <div className='sub-container'>
                        {
                            !click 
                            ? 
                            <img 
                                style={{width: '500px'}}
                                alt='Imagen Yaganes'
                                onClick={() => handleImages()}
                                src={IMAGES[random]}
                            />
                            :
                            <img 
                                style={{width: '500px'}}
                                alt='Imagen Yaganes'
                                src={IMAGES[random]}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManyImgs;