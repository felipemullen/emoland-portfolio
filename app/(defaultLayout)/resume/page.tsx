export default function ResumePage() {
    return (
        <div className="fixed h-full w-full top-0 left-0 z-20 pl-16 md:pr-6">
            <div className="h-full w-full flex flex-col">
                <div className="flex justify-between items-center mt-2 bg-zinc-50/50 p-3 rounded border">
                    <span className="text-neutral-800">Felipe Mullen, <i>curriculum vitae</i></span>
                    <small className="text-neutral-600">(last updated: February 2024)</small>
                </div>
                <div className="grow w-full p-3 my-3 bg-zinc-50 border rounded">
                    <iframe className="w-full h-1/2" src="/resume/felipe_mullen_cv_light_2024.pdf" />
                    <iframe className="w-full h-1/2" src="/resume/felipe_mullen_cv_dark_2024.pdf" />
                </div>
            </div>
        </div>
    );
}