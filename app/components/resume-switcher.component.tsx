'use client';

import { useState } from 'react';
import { Moon, Sun } from 'react-feather';

export function ResumeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center mt-2 bg-zinc-50/50 p-2 sm:px-4 rounded border">
                <div>
                    <h1 className="text-neutral-800">Felipe Mullen, <i>curriculum vitae</i></h1>
                    <small className="text-neutral-600 text-xs">(last updated: February 2024)</small>
                </div>
                <button type="button" className="px-2 text-gray-500 hover:text-gray-700" onClick={() => setIsDarkMode(!isDarkMode)}>
                    {!isDarkMode && <Moon />}
                    {!!isDarkMode && <Sun />}
                </button>
            </div>
            <div className="grow w-full p-2 my-1 sm:my-3 bg-zinc-50 border rounded">
                {!isDarkMode && <iframe className="w-full h-full" src="/files/felipe_mullen_cv_light_2024.pdf" />}
                {!!isDarkMode && <iframe className="w-full h-full" src="/files/felipe_mullen_cv_dark_2024.pdf" />}
            </div>
        </>
    );
}