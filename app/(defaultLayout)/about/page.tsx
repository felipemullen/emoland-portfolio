import { Anchor2 } from '@/app/components/anchor';
import { useMemo } from 'react';
import { GitHub } from 'react-feather';

function LinkSection({ headline, links }) {
    return (
        <div className="py-8 text-base font-semibold leading-7">
            <p className="text-gray-900">{headline}</p>
            <ul className="list-disc list-inside">
                {links.map(({ href, linkText, description, github }, i) => (
                    <li key={i} className="text-gray-600">
                        <Anchor2 href={href}>{linkText}</Anchor2>
                        {description && <span className='font-normal'> - {description}</span>}
                        {github &&
                            <a href={github} target="_blank" className="ml-2 inline-block align-bottom">
                                <GitHub className="bg-gray-200 p-1 rounded-lg" size={25} />
                            </a>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function AboutPage() {
    const links = useMemo(() => ([
        {
            href: 'https://www.linkedin.com/in/felipemullen/',
            linkText: 'LinkedIn'
        },
        {
            href: '/resume/felipe_mullen_cv_light_2024.pdf',
            linkText: 'My Resume',
            description: 'PDF file download'
        },
        {
            href: 'https://ind3x.games',
            linkText: 'Ind3x Interactive',
            description: 'A gaming company I founded in 2023',
            type: 'work'
        },
        {
            href: 'https://stackoverflow.com/users/3654061/felipe',
            linkText: 'StackOverflow profile',
            description: 'Current reputation: 11k'
        },
        {
            href: 'https://marketplace.visualstudio.com/items?itemName=felipemullen.tldr-panel',
            linkText: 'TL;DR Panel',
            description: 'Open source VSCode extension',
            type: 'work',
            github: 'https://github.com/felipemullen/tldr-panel'
        },
        {
            href: 'https://ind3x.games/games/tapski',
            linkText: 'Tap Ski Extreme',
            description: 'Open source casual endless Unity game',
            type: 'work',
            github: 'https://github.com/indexinteractive/tapski-unity/'
        },
        {
            href: 'https://apps.apple.com/us/app/ricepaper-japanese-wallpapers/id1497443393',
            linkText: 'RicePaper',
            description: 'Open source japanese word of the day macOS App',
            type: 'work',
            github: 'https://github.com/felipemullen/RicePaper'
        }
    ]), []);

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 pl-16 pr-2">
            <div className="absolute inset-0 bg-[url(/image/grid.svg)] bg-center"></div>
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto rounded sm:rounded-lg max-w-screen-md sm:px-10">

                <h1 className="text-center text-3xl font-bold uppercase text-neutral-800">Felipe Mullen</h1>

                <div className="divide-y">
                    <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                        <p>
                            Hey, I&apos;m Felipe 👋 a creative software type based in <Anchor2 target="_blank" href="https://en.wikipedia.org/wiki/San_Diego">San Diego</Anchor2>,
                            who runs an indie game company, <Anchor2 href="https://ind3x.games">Ind3x Interactive</Anchor2>.
                        </p>
                        <p className="bg-zinc-50/50 p-3 text-sm text-center border ">
                            <i>If you&apos;re interested in my work, feel free to view and/or download a copy of my <Anchor2 href="/resume">resume</Anchor2>.</i>
                        </p>
                        <p>
                            I have a lot of different <Anchor2 href="/projects">projects</Anchor2> 😅, and although&nbsp;
                            <Anchor2 href="/photography">photography</Anchor2> is a hobby of mine, I happen to share the same
                            passion for many other pursuits, such as drumming, <Anchor2 href="/poetry">poetry</Anchor2>,
                            song writing, visual arts, and personal <Anchor2 href="/blog">writing</Anchor2>.
                        </p>
                        <p>
                            As they say, time waits for no man, and there just isn&apos;t enough <Anchor2 href="#">time</Anchor2> to do everything 😑
                        </p>
                        {/* TODO: some verse */}
                    </div>
                    <LinkSection headline="Online presence:" links={links.filter(x => x.type !== 'work')} />
                    <LinkSection headline="Notable work:" links={links.filter(x => x.type === 'work')} />
                </div>
            </div>
        </div>
    );
}