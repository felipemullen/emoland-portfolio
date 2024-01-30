export default function ResumePage() {
    return (
        <div className="fixed h-full w-full top-0 left-0 z-20 pl-16 md:pr-6">
            <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mt-2 mx-3 bg-zinc-50/50 p-3 rounded border">
                    <span className="text-neutral-800">Felipe Mullen, <i>curriculum vitae</i></span>
                    <small className="text-neutral-600">(last updated: December 2023)</small>
                </div>
                <div className="grow p-3 m-3 bg-zinc-50 border rounded">
                    <iframe className="w-full h-full" src="/resume/FelipeMullen_CV_2023.pdf" />
                </div>
            </div>
        </div>
    );
}