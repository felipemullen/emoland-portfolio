import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '../components/sidebar.component';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Felipe Mullen | Software Engineer, Game Developer, Creative Enthusiast',
    description: 'Waking up with a passion to make things',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Sidebar />
            </body>
        </html>
    );
}
