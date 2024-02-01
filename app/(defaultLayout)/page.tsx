import { GltfViewer } from '../components/gltf-viewer';

export default function Home() {
    return (
        <main className="h-screen select-none">
            <div className="fixed text-right text-neutral-600 top-0 right-0 z-50 md:pl-32 pr-6 pt-6 2xl:w-6/12">
                <a href="/about">
                    <h1 className="text-6xl font-bold uppercase">Felipe Mullen</h1>
                </a>
            </div>
            <div className="fixed w-full text-right text-neutral-600 top-0 right-0 -z-10 md:pl-32 pr-6 pt-6 2xl:w-6/12">
                <a className="invisible">
                    <h1 className="text-6xl font-bold uppercase">Felipe Mullen</h1>
                </a>
                <p className="text-3xl text-neutral-500">
                    programmer, hobby artist,
                </p>
                <p className="text-3xl text-neutral-500">
                    founder of <span className="text-neutral-400">Ind3x Interactive</span>
                </p>
            </div>
            <GltfViewer />
        </main>
    );
}
