import { Meh } from 'react-feather';

export default function PoetryPage() {
    return (
        <div className="fixed h-full w-full top-0 left-0 z-20 pl-16 md:pr-6">
            <div className="h-full flex items-center justify-center">
                <div className="flex flex-col justify-center items-center mt-2 mr-2 bg-zinc-50/75 p-4 md:p-12 rounded border text-center">
                    <Meh className="text-xl my-2" />
                    <span className="text-lg">
                        This page is coming soon!
                    </span>
                    <span className="text-sm text-neutral-400 mb-2">
                        Like most good things in life, this page is a work in progress.
                    </span>
                </div>
            </div>
        </div>
    );
}