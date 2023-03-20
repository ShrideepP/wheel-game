import React, { useState, useRef } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { GiCheckMark } from 'react-icons/gi';
import { MdMailOutline, MdOutlinePhone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';
 
const Form = () => {

    const [loading, setLoading] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [luckyBtn, setLuckyBtn] = useState(true);
    
    const navigate = useNavigate();
    const {userInfo, handleEmailChange, handlePhoneChange} = UserContext();

    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const handleEmailClick = () => emailRef.current.focus();
    const handlePhoneClick = () => phoneRef.current.focus();

    const handleLuckyBtn = () => setLuckyBtn(false);
    const handleCheckbox = () => setCheckbox(!checkbox);

    const handleSubmit = e => {
        e.preventDefault();
        if(checkbox) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setCheckbox(false);
                setLuckyBtn(true);
                navigate('/play');
            }, 2000);
        } else {
            toast.error('Please agree to receive recurring automated messages');
        };
    };

    return (
        <div className='w-full lg:w-4/5 space-y-4'>
            <ToastContainer 
                theme='light'
                position='bottom-center'
                autoClose={2500}
                closeOnClick 
            />
            <h1 className='text-3xl md:text-4xl font-extrabold leading-snug md:leading-snug'>
                This is how EngageBud <br className='hidden sm:block' /> looks like in action!
            </h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div onClick={handleEmailClick} className='py-2 px-3 flex items-center gap-x-4 bg-white border-b-2 border-accent rounded-t'>
                    <MdMailOutline className='text-3xl' />
                    <div className='flex flex-col gap-y-[2px]'>
                        <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                        <input onChange={handleEmailChange} value={userInfo.email} ref={emailRef} required type="email" placeholder='joe@gmail.com' className='w-full text-base font-medium outline-none rounded-none' />
                    </div>
                </div>
                <div onClick={handlePhoneClick} className='py-2 px-3 flex items-center gap-x-4 bg-white border-b-2 border-accent rounded-t'>
                    <MdOutlinePhone className='text-3xl' />
                    <div className='flex flex-col gap-y-[2px]'>
                        <label htmlFor="email" className='text-sm font-semibold'>Phone</label>
                        <input onChange={handlePhoneChange} value={userInfo.phone} ref={phoneRef} required type="tel" placeholder='+91 98256 XXXXX' className='w-full text-base font-medium outline-none rounded-none' />
                    </div>
                </div>
                <div className='py-2 px-3 flex items-center gap-x-4 border-2 border-black rounded-md'>
                    <button onClick={handleCheckbox} type='button' className='bg-black min-w-[2rem] min-h-[2rem] text-white text-lg grid place-items-center rounded-sm'>
                        {checkbox && <GiCheckMark />}
                    </button>
                    <p className='text-sm font-normal'>
                        I agree to receiving recurring automated messages at the number I have provided.
                    </p>
                </div>
                <button type="submit" className='w-full h-14 grid place-items-center bg-green-800 hover:bg-green-700 rounded-full'>
                    {loading ? <ImSpinner2 className='text-2xl text-white animate-spin' /> : <span className='text-lg text-white font-semibold tracking-tight'>Try Your Luck</span>}
                </button>
            </form>
            <p className='text-sm text-accent text-center font-normal'>
                *You can spin the wheel only once!
                <br />
                *If you win, you can claim your coupon for 10 minutes only!
            </p>
            {luckyBtn &&
            <div className='flex justify-center items-center gap-x-4'>
                <span className='text-lg text-black font-bold tracking-tight'>
                    No, I don't feel lucky
                </span>
                <button type='button' onClick={handleLuckyBtn}>
                    <GoPlus className='text-4xl rotate-45' />
                </button>
            </div>}
        </div>
    );

};

export default Form;