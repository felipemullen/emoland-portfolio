import { ResumeSwitcher } from '@/app/components/resume-switcher.component';

export default function ResumePage() {

    return (
        <div className="fixed h-full w-full top-0 left-0 z-20 pl-16 md:pr-6">
            <div className="h-full w-full flex flex-col">
                <ResumeSwitcher />
            </div>
        </div>
    );
}