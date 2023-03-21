import React, { useState, useRef } from 'react';
import wheelArrow from '../assets/wheel-arrow.png';
import spinningWheel from '../assets/spinning-wheel.png';
import spinSound from '../assets/spin-sound.mp3';
import crowdCheer from '../assets/crowd-cheer.mp3';
import { WheelContext } from '../context/WheelContext';
import { useNavigate } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const Wheel = ({ setConfetti }) => {
    
    const navigate = useNavigate();
    const { declarePrice } = WheelContext();

    const [loading, setLoading] = useState(false);
    
    const wheelRef = useRef(null);
    const spinSoundRef = useRef(null);
    const cheerSoundRef = useRef(null);

    const randomValue = () => Math.ceil(30 + Math.ceil(Math.random() * 360));

    const handlePlay = () => {

        const numberOfTurns = 360 * 5;
        const randomNum = randomValue();

        declarePrice(randomNum);

        setLoading(true);
        spinSoundRef.current.play();
        wheelRef.current.style.transform = `rotate(${(numberOfTurns + randomNum) + 'deg'})`;

        setTimeout(() => {
            spinSoundRef.current.pause();
            setConfetti(true);
            cheerSoundRef.current.play();
        }, 5000);
        
        setTimeout(() => {
            navigate('/reward');
            setLoading(false);
            setConfetti(false);
        }, 10000);

    };

    return (
        <div className='relative space-y-6 z-20'>
            <div className='relative'>
                <img ref={wheelRef} style={{transformOrigin: 'center'}} src={spinningWheel} alt="wheel" className={`wheel w-80 h-80 lg:w-[30rem] lg:h-[30rem] object-contain`} />
                <img src={wheelArrow} alt="wheel-arrow" className='w-14 z-40 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 object-contain' />
            </div>
            <button onClick={handlePlay} disabled={loading} className='w-40 h-14 mx-auto grid place-items-center bg-green-800 hover:bg-green-700 rounded-full'>
                {loading ? <ImSpinner2 className='text-2xl text-white animate-spin' /> : <span className='text-lg text-white font-semibold tracking-wide'>SPIN</span>}
            </button>
            <audio ref={spinSoundRef} className='hidden' src={spinSound} type='audio/mp3' controls></audio>
            <audio ref={cheerSoundRef} className='hidden' src={crowdCheer} type='audio/mp3' controls></audio>
        </div>
    );

};

export default Wheel;