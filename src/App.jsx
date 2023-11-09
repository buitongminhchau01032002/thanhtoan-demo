import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import OtpPage from './pages/Otp';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/otp/:phone" element={<OtpPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
