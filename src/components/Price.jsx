import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Price = () => {

    const [copiedText] = useState('XAXPDF20');

    const handleCopy = () => {
        toast.success('Copied Successfully');
        navigator.clipboard.writeText(copiedText);
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
            <h2 className='text-3xl font-bold leading-snug'>20% Off Coupon on Best Sellers</h2>
            <div className="w-full h-14 flex items-center bg-[#14141433] overflow-hidden rounded">
                <input type="text" readOnly value={copiedText} className='w-full px-6 text-xl text-white font-bold bg-transparent outline-none' />
                <button onClick={handleCopy} className='w-fit h-full px-6 text-white text-base font-semibold grid place-items-center bg-green-800 hover:bg-green-700'>
                    COPY
                </button>
            </div>
            <button className="w-full h-14 grid place-items-center bg-green-800 hover:bg-green-700 rounded-full">
                <span className='text-lg text-white font-semibold tracking-tight'>Close Panel & Copy</span>
            </button>
            <p className='text-sm text-accent text-center font-normal'>
                *You can claim your coupon for 10 minutes only!
            </p>
        </div>
    );

};

export default Price;