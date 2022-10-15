import React from 'react'
const Glosario = () => {
    
    const GLOS = ["tstwíá-sú: usado para rellnar un agujero", "tstwíösata-l: intentar, ofrecer", "tsteíi: intentar encajar muy cernanamente", "t-gul-ata: caracoles que dejaron los cangrejos"];

    return (
    <div>
        <h2>T</h2>
        {GLOS.map(frase => <p>{frase}</p>)}
    </div>
  )
}

export default Glosario;