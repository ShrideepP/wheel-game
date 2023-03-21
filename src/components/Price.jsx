import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { WheelContext } from '../context/WheelContext';
import { UserContext } from '../context/UserContext';

const Price = () => {

    const navigate = useNavigate();

    const { priceWon, setPriceWon } = WheelContext();
    const { setUserInfo } = UserContext();

    const [copiedText] = useState('XAXPDF20');
    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        toast.success('Copied Successfully');
        setCopy(true);
        navigator.clipboard.writeText(copiedText);
    };
    
    const handleBack = () => {
        navigator.clipboard.writeText(copiedText);
        setUserInfo({email: '', phone: ''});
        setPriceWon('');
        navigate('/');
    };

    return (
        <div className='w-full md:w-3/4 lg:w-2/4 text-center space-y-4'>
            <ToastContainer 
                theme='light'
                position='bottom-center'
                autoClose={2500}
                closeOnClick 
            />
            <h6 className='text-xl text-black font-bold'>Congrats You Won:</h6>
            <h2 className='text-3xl font-bold leading-snug capitalize'>{priceWon ? priceWon : '30% sitewide off'}</h2>
            <div className="w-full h-14 flex items-center bg-[#14141433] overflow-hidden rounded">
                <input type="text" readOnly value={copiedText} className='w-full px-6 text-xl text-white font-bold bg-transparent outline-none' />
                <button onClick={handleCopy} disabled={copy} className='w-fit h-full px-6 grid place-items-center bg-green-800 hover:bg-green-700'>
                    <span className='text-white text-base font-semibold uppercase'>{copy ? 'coppied' : 'copy'}</span>
                </button>
            </div>
            <button onClick={handleBack} className="w-full h-14 grid place-items-center bg-green-800 hover:bg-green-700 rounded-full">
                <span className='text-lg text-white font-semibold tracking-tight'>Close Panel & Copy</span>
            </button>
            <p className='text-sm text-accent text-center font-normal'>
                *You can claim your coupon for 10 minutes only!
            </p>
        </div>
    );

};

export default Price;