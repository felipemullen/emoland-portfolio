import { Anchor } from '../components/anchor';
import { Sidebar } from '../components/sidebar.component';

export default function Home() {
    return (
        <main className="h-screen">
            <Sidebar />
            <div className="h-full w-full flex items-end justify-end">
                <div className="text-end w-6/12 p-20">
                    <h1 className="font-sans text-7xl tracking-widest font-thin underline underline-offset-4 decoration-2">Felipe Mullen</h1>
                </div>
            </div>
        </main>
    );
}
