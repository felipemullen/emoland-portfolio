'use client';

import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export interface PicProps {
    pathname: string;
    aspect: string;
}

export function Pic({ pathname, aspect }) {
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

    const toggleOverlay = () => setShowOverlay(!showOverlay);
    const photoId = /[0-9]+/.exec(pathname)?.[0];

    return (
        <>
            {showOverlay && createPortal(
                <div className="p-6 fixed w-screen h-screen z-[100] bg-neutral-800/75" onClick={toggleOverlay}>
                    <div className="h-full flex justify-center items-center">
                        <Image width={1200} height={1200} className={`drop-shadow-extra max-h-full max-w-full object-contain rounded-lg`} src={pathname} alt="Photo © Felipe Mullen" />
                    </div>
                </div>
                , document.body)}
            <div className={`relative select-none ${showOverlay ? '' : 'hover:scale-105'} border-white border mb-1 sm:mb-2 lg:mb-4`} onClick={toggleOverlay}>
                <div className="absolute rounded-tr-lg top-0 right-0 bg-neutral-900 px-3 py-2 text-white" >#{photoId}</div>
                <Image width={300} height={500} className={`w-full rounded-lg object-cover aspect-${aspect} transition-transform`} src={pathname} alt="Photo © Felipe Mullen" />
            </div>
        </>
    );
}