// BeforeRegister.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BeforeRegister = () => {
    const navigate = useNavigate();

    const handleSelection = (role) => {
        localStorage.setItem('userRole', role);  // Save selection in local storage
        navigate('/register');  // Redirect to registration page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3eee7] text-[#7a6a58]">
            <div className="text-center p-6 rounded-lg shadow-lg bg-white max-w-sm w-full">
                <h2 className="text-3xl font-semibold mb-6">Are you a Planner or a Vendor?</h2>
                <p className="text-lg mb-8 text-gray-700">Select your role to proceed with the registration</p>
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => handleSelection('Planner')}
                        className="px-6 py-3 text-white bg-[#7a6a58] rounded-full text-xl font-semibold shadow-md hover:bg-[#6a5749] transition-all"
                    >
                        Planner
                    </button>
                    <button
                        onClick={() => handleSelection('Vendor')}
                        className="px-6 py-3 text-white bg-[#7a6a58] rounded-full text-xl font-semibold shadow-md hover:bg-[#6a5749] transition-all"
                    >
                        Vendor
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BeforeRegister;
