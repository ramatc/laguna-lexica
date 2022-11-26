import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const Imagen = ({img}) => {
    const {id, fuente} = img;
    const [hidden, setHidden] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        if(id !== 16){
            setHidden('hidden');
        }else{
            setTimeout(function(){
                navigate('/texto');
            }, 500);
        }
    }

    return (
        <img src={fuente} alt="Fotos Yaganes"
            className={`images-click ${hidden}`}
            onClick={() => handleClick()}
            data-aos="zoom-in" 
            data-aos-duration="1500"  
        /> 
    )
}

export default Imagen;