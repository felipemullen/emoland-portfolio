import { LeavePostOrBlog } from '../components/blog/leave-post-blog.component';
import localFont from 'next/font/local';
import nDynamic from 'next/dynamic';
import '../globals.css';

const DarkModeComponent = nDynamic(() => import('../components/dark-mode'), { ssr: false });
export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Felipe Mullen - Blog',
    description: 'Software engineering, design, gaming, and sometimes theology.'
}

const avenir = localFont({
    src: '../../fonts/AvenirNextCondensed-UltraLight.ttf'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <head>
                <script type="application/javascript" dangerouslySetInnerHTML={{
                    __html: `
                        const darkMode = localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
                        if (darkMode) {
                            document.documentElement.classList.add('dark');
                        }
                ` }} />
            </head>
            <body className="container mx-auto bg-white dark:bg-ind3x">
                <div className="w-100 flex justify-center dark:white">
                    <div className="w-full max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center mb-16">
                            <h1 className="text-slate-800 font-sans mt-4 mb-1 columns-2 flex items-center">
                                <span className={`bg-index px-4 uppercase font-bold text-4xl dark:text-neutral-400 ${avenir.className}`}>Felipe Mullen: blog</span>
                                <DarkModeComponent />
                            </h1>
                            <LeavePostOrBlog />
                        </div>
                        <div className='dark:text-white'>
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
