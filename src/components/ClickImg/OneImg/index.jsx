import React from 'react';

const index = ({imagen}) => {

    const {img, funct} = imagen;


    return (
        <img src={img} alt="" onClick={() => funct()}/>
    )
}

export default index;