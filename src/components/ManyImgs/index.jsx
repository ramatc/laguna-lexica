import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/Fake';

import img1 from '../../assets/images/images-random/img1.jpg';
import img2 from '../../assets/images/images-random/img2.jpeg';
import img3 from '../../assets/images/images-random/img3.jpeg';

const ManyImgs = () => {
    const initial = Math.floor(Math.random() * 3); 
    const IMAGES = [img1, img2, img3];
    
    const navigate = useNavigate();
    
    const [click, setClick] = useState(false);
    const [random, setRandom] = useState(initial);

    const handleImages = () => {
        setClick(true);

        let imgMoving;

        imgMoving = setInterval(function(){
            setRandom(Math.floor(Math.random()*3));
        }, 1000/4);

        setTimeout(function(){
            clearInterval(imgMoving);
            imgMoving = setInterval(function(){
                setRandom(Math.floor(Math.random()*3));
            }, 1000/12);
        }, 6000);

        setTimeout(function(){
            clearInterval(imgMoving);
            imgMoving = setInterval(function(){
                setRandom(Math.floor(Math.random()*3));
            }, 1000/25);
        }, 12000);

        setTimeout(function(){
            clearInterval(imgMoving);
            imgMoving = setInterval(function(){
                setRandom(Math.floor(Math.random()*3));
            }, 1000/60);
        }, 16000);

        setTimeout(function(){
            navigate('/botones');
        }, 20000);
    }

    return (
        <>
            <NavBar/>
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
        </>
    )
}

export default ManyImgs;