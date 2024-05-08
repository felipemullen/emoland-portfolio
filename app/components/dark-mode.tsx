'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

export default function DarkMode() {
    const [theme, setTheme] = useState<'dark' | 'light' | undefined>();

    useEffect(() => {
        const localTheme = localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? 'dark'
            : 'light';

        setTheme(localTheme);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    }, [theme]);

    return (
        <div className="bg-gray-200 dark:bg-neutral-500 rounded-full text-gray-400 flex py-1">
            <button className="mx-1 rounded-full" onClick={() => setTheme('dark')}>
                <Moon className="dark:text-slate-300 hover:text-slate-300 dark:bg-indigo-900 hover:bg-indigo-900 rounded-full py-1" size={25} />
            </button>
            <button className="mx-1 rounded-full" onClick={() => setTheme('light')}>
                <Sun className="dark:text-neutral-300 text-yellow-500 hover:text-yellow-500 bg-white dark:bg-neutral-500 hover:bg-white rounded-full py-1" size={25} />
            </button>
        </div>
    );
}