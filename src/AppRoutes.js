import { Routes, Route } from 'react-router-dom';

import Home from './Home';

function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/companies" element={<Home/>} />
                <Route path="/companies/:company" element={<Home/>} />
                <Route path="/jobs" element={<Home/>} />
                <Route path="/login" element={<Home/>} />
                <Route path="/signup" element={<Home/>} />
                <Route path="/profile" element={<Home/>} />
            </Routes>
    )
}

export default AppRoutes;