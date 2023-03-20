import React from 'react';
import top from '../assets/top.png';
import bottom from '../assets/bottom.png';
import wheel from '../assets/wheel.png';
import Price from '../components/Price';
import Confetti from 'react-confetti';

const Reward = () => {
    return (
        <section className='w-full h-screen md:grid md:grid-cols-3 lg:grid-cols-2 place-items-center relative z-0 overflow-hidden'>

            <Confetti />
            
            <img src={top} alt="leaves" className='fixed top-0 left-0 z-10' />

            <div className="md:col-span-1 lg:col-auto relative z-20 lg:flex justify-center">
                <img src={wheel} alt="spinner" className='w-80 h-80 lg:w-[30rem] lg:h-[30rem] absolute left-2/4 -translate-x-2/4 -translate-y-2/4 md:relative md:left-0 md:translate-y-0 md:-translate-x-1/4 lg:translate-x-0 object-contain' />
            </div>

            <div className="w-full spaceX md:col-span-2 lg:col-auto absolute bottom-10 sm:bottom-14 md:relative md:bottom-0 z-20">
                <Price />
            </div>

            <img src={bottom} alt="leaves" className='fixed bottom-0 left-0 z-10' />

        </section>
    );
};

export default Reward;