import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import OtpPage from './pages/Otp';
import SignInPage from './pages/SignIn';
import { Toaster } from 'react-hot-toast';

export const UserContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);
    // const user = {
    //     phone: '+84123456789',
    //     password: 'fsadf3rwf3'
    // }
    console.log('user: ', user);
    return (
        <Router>
            <div className="App">
                <UserContext.Provider value={{ user: user, setUser: setUser }}>
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/otp" element={<OtpPage />} />
                        <Route path="/signin" element={<SignInPage />} />
                    </Routes>
                </UserContext.Provider>
                <Toaster toastOptions={{ duration: 4000 }} />
            </div>
        </Router>
    );
}

export default App;
