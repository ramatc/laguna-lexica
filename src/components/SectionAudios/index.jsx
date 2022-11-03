import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/Fake';
import './styles.css'

import audio1 from '../../assets/audios/Alaköna-observar.ogg'
import audio2 from '../../assets/audios/Lushá-rojo.ogg'
import audio3 from '../../assets/audios/Miatána-sonreír.ogg'
import audio4 from '../../assets/audios/Tapóin-padre.ogg'
import audio5 from '../../assets/audios/Tön-tierra.ogg'
import audio6 from '../../assets/audios/Yampímata-conversar.ogg'

const SectionAudios = () => {
  return (
    <>  
        <NavBar/>
        <div className='audio-wrapper'>
            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio1}
                autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio2}
                // autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio3}
                // autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio4}
                // autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio5}
                // autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio6}
                // autoPlay
                controls
                />
            </div>
        </div>

        <Link to='/palabras'>
            <p className='text-audios'>salir a pescar al atardecer de forma tal que el día acabe mientras uno está ocupado</p>
        </Link>
    </>
  )
}

export default SectionAudios;