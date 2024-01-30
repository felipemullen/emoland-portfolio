import { Anchor } from '@/app/components/anchor';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';

export default function AboutPage() {
    return (
        <div className="fixed h-full w-full top-0 left-0 flex justify-center pt-32 z-20 overflow-x-hidden overflow-y-scroll">
            <div className="pl-16 pr-8 md:px-0 md:w-6/12">
                <div className="mb-12">
                    <h1 className="text-center text-6xl font-bold uppercase text-neutral-800">Felipe Mullen</h1>
                    <Link className="flex items-center justify-center text-blue-600 hover:text-blue-800" href="/">
                        <ArrowLeft size={15} />
                        <small>back to main page</small>
                    </Link>
                </div>
                <div className="font-sans text-md md:text-lg text-slate 2xl:px-32">
                    <p className="mt-4">
                        Hey, I&apos;m Felipe 👋 a creative type based in <Anchor target="_blank" href="https://en.wikipedia.org/wiki/San_Diego">San Diego</Anchor>,
                        who runs an indie game company, <Anchor href="https://ind3x.games">Ind3x Interactive</Anchor>.
                    </p>
                    <p className="mt-4 font- bg-zinc-50/50 p-3 text-sm text-center border ">
                        <i>If you&apos;re interested in my work, feel free to view and/or download a copy of my <Anchor href="/resume">resume</Anchor>.</i>
                    </p>
                    <p className="mt-4">
                        I have a lot of different <Anchor href="/projects">projects</Anchor> 😅, and although&nbsp;
                        <Anchor href="/photography">photography</Anchor> is a hobby of mine, I happen to share the same
                        passion for many other pursuits, such as drumming, <Anchor href="/poetry">poetry</Anchor>,
                        song writing, visual arts, and personal <Anchor href="/writing">writing</Anchor>.
                    </p>
                    <p className="mt-4">
                        As they say, time waits for no man, and there just isn&apos;t enough <Anchor href="/time">time</Anchor> to do everything 😑
                    </p>
                    <p>
                        {/* TODO: some verse */}
                    </p>
                    <hr className="my-12" />
                </div>
            </div>
        </div>
    );
}