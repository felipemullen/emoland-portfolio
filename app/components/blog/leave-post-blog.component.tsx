'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CSSProperties } from 'react';
import { ArrowLeft } from 'react-feather';

export function LeavePostOrBlog() {
    const linkStyles: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none'
    };

    const pathname = usePathname();

    return (
        <Link style={linkStyles} className="text-blue-600 hover:text-blue-800 dark:text-indigo-400 dark:hover:text-indigo-500" href={pathname.endsWith('/blog') ? '/' : '/blog'}>
            <ArrowLeft size={15} />
            {pathname.endsWith('/blog')
                ? <small>back to main site</small>
                : <small>back to posts</small>
            }
        </Link>
    );
}