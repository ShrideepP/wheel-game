import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserProvider } from './context/UserContext';
import { WheelProvider } from './context/WheelContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserProvider>
            <WheelProvider>
                <App />
            </WheelProvider>
        </UserProvider>
    </React.StrictMode>,
);