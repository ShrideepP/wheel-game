import React from 'react';
import top from '../assets/top.png';
import bottom from '../assets/bottom.png';
import Wheel from '../components/Wheel';

const PlayGame = () => {
    return (
        <section className='w-full h-screen spaceX relative z-0 grid place-items-center'>

            <img src={top} alt="leaves" className='fixed top-0 left-0 z-10' />

            <Wheel />

            <img src={bottom} alt="leaves" className='fixed bottom-0 left-0 z-10' />

        </section>
    );
};

export default PlayGame;