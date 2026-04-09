import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Gyms = lazy(() => import('./pages/Gyms'));
const GymDetails = lazy(() => import('./pages/GymDetails'));
const SignUp = lazy(() => import('./pages/Auth/SignUp'));
const Login = lazy(() => import('./pages/Auth/Login'));

// Loading component
const PageLoader = () => (
    <div className="bg-[#0a0d0a] min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#b0f020]/20 border-t-[#b0f020] rounded-full animate-spin"></div>
    </div>
);

const App = () => {
    return (
        <Router>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gyms" element={<Gyms />} />
                    <Route path="/gym/:id" element={<GymDetails />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
