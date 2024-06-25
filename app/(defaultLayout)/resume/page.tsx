import { ResumeSwitcher } from '@/app/components/resume-switcher.component';

export default function ResumePage() {

    return (
        <div className="absolute h-full w-full inset-0 z-20 pl-16 pr-2">
            <div className="h-full w-full flex flex-col">
                <ResumeSwitcher />
            </div>
        </div>
    );
}