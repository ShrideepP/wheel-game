import React, {createContext, useState, useContext} from 'react';

const Context = createContext();

export const UserProvider = ({children}) => {
    
    const [userInfo, setUserInfo] = useState({email: '', phone: ''});

    const handleEmailChange = e => setUserInfo({...userInfo, email: e.target.value});

    const handlePhoneChange = e => setUserInfo({...userInfo, phone: e.target.value});
    
    return (
        <Context.Provider
            value={{
                userInfo,
                setUserInfo,
                handleEmailChange,
                handlePhoneChange,
            }}
        >
            {children}
        </Context.Provider>
    );

};

export const UserContext = () => useContext(Context);