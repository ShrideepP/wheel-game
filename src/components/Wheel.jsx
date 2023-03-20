import React from 'react';
import wheelArrow from '../assets/wheel-arrow.png';
import spinningWheel from '../assets/spinning-wheel.png';
import spinSound from '../assets/spin-sound.mp3';
import { WheelContext } from '../context/WheelContext';

const Wheel = () => {

    const {wheelStyles} = WheelContext();

    return (
        <div className='relative space-y-6 z-20'>
            <div className='relative'>
                <img style={wheelStyles} src={spinningWheel} alt="wheel" className='w-80 h-80 lg:w-[30rem] lg:h-[30rem] object-contain' />
                <img src={wheelArrow} alt="wheel-arrow" className='w-14 z-40 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 object-contain' />
            </div>
            <button type='button' className='w-40 h-14 mx-auto grid place-items-center bg-green-800 hover:bg-green-700 rounded-full'>
                <span className='text-lg text-white font-bold tracking-wide uppercase'>Spin</span>
            </button>
            <audio className='hidden' src={spinSound} type='audio/mp3' controls></audio>
        </div>
    );

};

export default Wheel;