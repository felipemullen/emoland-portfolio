import { LeavePostOrBlog } from '../components/blog/leave-post-blog.component';
import localFont from 'next/font/local';
import '../globals.css';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Felipe Mullen - Blog',
    description: 'The official blog of confusion'
}

const avenir = localFont({
    src: '../../fonts/AvenirNextCondensed-UltraLight.ttf'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body className="container mx-auto bg-white">
                <div className="w-100 flex justify-center">
                    <div className="w-full max-w-2xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-neutral-500 font-sans uppercase mt-4 mb-1">
                                <span className={`bg-index px-4 font-bold text-4xl ${avenir.className}`}>Felipe Mullen: blog</span>
                            </h2>
                            <LeavePostOrBlog />
                        </div>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
