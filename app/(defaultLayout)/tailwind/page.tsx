import Image from 'next/image';
import { useMemo } from 'react';
import { Check, GitHub } from 'react-feather';

function Anchor(props: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
    return (<a {...props} target={props.target || '_blank'} className="text-sky-500 hover:text-sky-600">{props.children}</a>)
}

function SkillItem(props) {
    return (
        <li {...props} className="flex text-sm items-center">
            <Check />
            <p className="ml-4">{props.children}</p>
        </li>
    );
}

function LinkSection({ headline, links }) {
    return (
        <div className="py-8 text-base font-semibold leading-7">
            <p className="text-gray-900">{headline}</p>
            <ul className="list-disc list-inside">
                {links.map(({ href, linkText, description, github }, i) => (
                    <li key={i} className="text-gray-600">
                        <Anchor href={href}>{linkText}</Anchor>
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

export default async function TailwindPage() {

    const skills = useMemo(() => ([
        '10 years of experience in full-stack web development',
        'Heavy focus on architecture and scalable solutions',
        'A firm understanding of microservice architecture',
        'Leadership experience assisting in the management of 3 other engineers',
        'Typescript/Javascript, Python, C# .Net, MongoDb, PostgreSQL, AWS services, React, Angular +more'
    ]), []);

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
            description: 'A gaming company I founded in 2023'
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
            type: 'oss',
            github: 'https://github.com/felipemullen/tldr-panel'
        },
        {
            href: 'https://ind3x.games/games/tapski',
            linkText: 'Tap Ski Extreme',
            description: 'Open source casual endless Unity game',
            type: 'oss',
            github: 'https://github.com/indexinteractive/tapski-unity/'
        },
        {
            href: 'https://apps.apple.com/us/app/ricepaper-japanese-wallpapers/id1497443393',
            linkText: 'RicePaper',
            description: 'Open source japanese word of the day macOS App',
            type: 'oss',
            github: 'https://github.com/felipemullen/RicePaper'
        },
        {
            href: 'https://chord-fiddle.web.app/',
            linkText: 'Chord Fiddle',
            description: 'Open source online songwriting tool in plain Javascript',
            type: 'oss',
            github: 'https://github.com/felipemullen/chord-fiddle'
        },
        {
            href: 'https://github.com/piratical/Madeline_2.0_PDE/pull/50',
            linkText: 'Madeline PDE 2',
            description: 'Contribution to OSS pedigree chart generator',
            type: 'oss'
        }
    ]), []);

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 pl-16 pr-2">
            <Image priority src="/tailwind/beams.jpg" alt="background" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width={1500} height={1500} />
            <div className="absolute inset-0 bg-[url(/tailwind/grid.svg)] bg-center"></div>
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg max-w-screen-md sm:px-10">
                <div className="mx-auto">
                    <h1 className="text-2xl">Felipe Mullen - Cover Letter</h1>
                    <div className="divide-y divide-gray-300/50">
                        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                            <p>To the hiring team @<Anchor href="https://github.com/tailwindlabs" target="_blank">Tailwind Labs</Anchor>,</p>
                            <p>
                                My name is <strong>Felipe Mullen</strong>, I am a software engineer with extensive experience
                                in a diverse range of technologies. I am currently looking for a new company to call home, and
                                having fallen in love with TailwindCSS over the last couple years, thought it might be the perfect
                                match for me.
                            </p>
                            <p>Below is a summary of my skills:</p>
                            <ul className="space-y-2">
                                {skills.map((s, i) => <SkillItem key={i}>{s}</SkillItem>)}
                            </ul>
                            <p>
                                I have been working as a <strong>full-stack engineer</strong> at <Anchor href="https://illumina.com/">Illumina (biotech)</Anchor> over
                                the past 7 years, and I am looking to pivot into a career that will offer me growth potential.
                                I am currently a <Anchor href="https://staffeng.com/guides/staff-archetypes/#architect">Staff level (L4)</Anchor>, well versed
                                in cloud solutions, webapps and APIs, and I have been simultaneously contributing and managing a team of 3 engineers
                                over the last 2 years.
                            </p>
                            <p>
                                If you think I might be a fit for your position as a <Anchor href="https://apply.workable.com/tailwind-labs/j/BFAAE89AEF">Staff Software Engineer</Anchor>,
                                don&apos;t hesitate to get in touch with me! Among the links below you will find <Anchor target="_top" href="/resume">my resume</Anchor>, some
                                of <Anchor target="_top" href="/projects">my work</Anchor>, and my <Anchor href="https://www.linkedin.com/in/felipemullen/">LinkedIn profile</Anchor>.
                            </p>
                        </div>
                        <LinkSection headline="Online presence:" links={links.filter(x => x.type !== 'oss')} />
                        <LinkSection headline="Open source work:" links={links.filter(x => x.type === 'oss')} />
                    </div>
                </div>
            </div>
        </div>

    );
}