import React from 'react';
import wheelArrow from '../assets/wheel-arrow.png';
import spinningWheel from '../assets/spinning-wheel.png';

const Wheel = () => {
    return (
        <div className='relative space-y-6 z-20'>
            <div className='relative'></div>
            <div>
                <button type='button' className='w-40 h-14 grid place-items-center bg-green-800 hover:bg-green-700 rounded-full'>
                    <span className='text-lg text-white font-bold tracking-wide uppercase'>Spin</span>
                </button>
            </div>
        </div>
    );
};

export default Wheel;