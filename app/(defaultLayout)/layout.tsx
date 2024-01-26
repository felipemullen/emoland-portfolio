import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Felipe Mullen | Three decades of confusion',
    description: 'Waking up without memory and finding daily a new home',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="fixed h-screen w-screen thing">
                    <div className="overlay h-screen w-screen">
                    </div>
                </div>
                <div className="fixed h-screen w-screen"></div>
                {children}
            </body>
        </html>
    );
}
