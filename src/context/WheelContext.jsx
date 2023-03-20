import React, {createContext, useState, useContext} from 'react';

const Context = createContext();

export const WheelProvider = ({children}) => {

    const wheelStyles = {
        transformOrigin: 'center',
    };
    
    return (
        <Context.Provider
            value={{
                wheelStyles,
            }}
        >
            {children}
        </Context.Provider>
    );
    
};

export const WheelContext = () => useContext(Context);