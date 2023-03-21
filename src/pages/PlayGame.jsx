import React, { useState } from 'react';
import top from '../assets/top.png';
import bottom from '../assets/bottom.png';
import Wheel from '../components/Wheel';
import Confetti from 'react-confetti';

const PlayGame = () => {

    const [confetti, setConfetti] = useState(false);

    return (
        <section className='w-full h-screen spaceX relative z-0 grid place-items-center overflow-hidden'>

            <img src={top} alt="leaves" className='fixed top-0 left-0 z-10' />

            {confetti && <Confetti />}

            <Wheel setConfetti={setConfetti} />

            <img src={bottom} alt="leaves" className='fixed bottom-0 left-0 z-10' />

        </section>
    );

};

export default PlayGame;