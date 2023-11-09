import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import OtpPage from './pages/Otp';

function App() {
    const [user, setUser] = useState(null);
    // const user = {
    //     phone: '+84123456789',
    //     password: 'fsadf3rwf3'
    // }
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />
                    <Route path="/otp" element={<OtpPage user={user} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
