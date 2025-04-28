// src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-2 py-1 rounded text-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default DarkModeToggle;
