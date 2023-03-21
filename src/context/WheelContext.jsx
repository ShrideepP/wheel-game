import React, {createContext, useState, useContext} from 'react';

const Context = createContext();

export const WheelProvider = ({children}) => {

    const [priceWon, setPriceWon] = useState('');
    
    let prices = ['30% sitewide off', 'hot chocolate free with tea', 'free 50g tea on purchase of rs.500', 'buy 2 effervescent tablets & get 1 free', 'free coffee mug on purchase worth 1000+', 'buy 1 get 1 free'];

    function declarePrice(num) {
        if(num >= 30 && num <= 90) {
            setPriceWon(prices[1]);
        } else if (num >= 90 && num <= 150) {
            setPriceWon(prices[2]);
        } else if (num >= 150 && num <= 210) {
            setPriceWon(prices[3]);
        } else if (num >= 210 && num <= 270) {
            setPriceWon(prices[4]);
        } else if (num >= 270 && num <= 330) {
            setPriceWon(prices[5]);
        } else if (num >= 330 && num <= 360) {
            setPriceWon(prices[0]);
        };
    };

    return (
        <Context.Provider
            value={{
                priceWon,
                setPriceWon,
                declarePrice,
            }}
        >
            {children}
        </Context.Provider>
    );
    
};

export const WheelContext = () => useContext(Context);