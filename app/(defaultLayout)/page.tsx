import Link from 'next/link';
import { GltfViewer } from '../components/gltf-viewer';

export default function Home() {
    return (
        <main className="h-screen select-none">
            <div className="fixed text-right top-0 right-0 z-50 md:pl-32 pr-6 pt-6 2xl:w-6/12 pointer-events-none">
                <a href="/about" className="text-neutral-600 hover:text-neutral-800 cursor-pointer pointer-events-auto">
                    <h1 className="text-6xl font-bold uppercase">Felipe Mullen</h1>
                </a>
                <p className="text-3xl text-neutral-500">
                    programmer, hobby artist,
                </p>
                <p className="text-3xl text-neutral-500">
                    founder of <Link href="https://ind3x.games" target="_blank" className="text-neutral-400 hover:text-neutral-600 pointer-events-auto cursor-pointer">Ind3x Interactive</Link>
                </p>
            </div>
            <GltfViewer />
        </main>
    );
}
