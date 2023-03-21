import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PlayGame from './pages/PlayGame';
import Reward from './pages/Reward'
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/play' element={<ProtectedRoute><PlayGame /></ProtectedRoute>} />
                <Route path='/reward' element={<ProtectedRoute><Reward /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;