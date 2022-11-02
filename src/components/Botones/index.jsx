import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const Botones = ({boton, random}) => {
    const {id, definition} = boton;
    const [hidden, setHidden] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        if(id !== random){
            setHidden('hidden');
        }else{
            setTimeout(function(){
                navigate('/final');
            }, 500);
        }
    }

    return (
        <button
            className={`main-btn ${hidden}`}
            onClick={() => handleClick()}   
        >  
            {definition}
        </button>
    )
}

export default Botones;