import Image from 'next/image';
import { ExternalLink, GitHub } from 'react-feather';
import { LinkLight } from '../buttons/link-light';

export interface ProjectCardProps {
    image: string;
    href: string;
    title: string;
    description: string;
    app?: string;
    github?: string;
}

export function ProjectCard(props: ProjectCardProps) {
    const pageLink = `/projects/${props.href}`;
    const imageUrl = `/project/thumb/${props.image}`

    return (
        <div className="max-w-full bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 flex flex-col">
            <a href={pageLink}>
                <div className="w-full bg-slate-800 rounded-t-lg border-b">
                    <Image height={500} width={500} className="w-full rounded-t-lg" src={imageUrl} alt={props.title} />
                </div>
            </a>
            <div className="flex-1 p-3 flex flex-col">
                <div className="">
                    <a href={pageLink}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-600 dark:text-white">{props.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-neutral-700 dark:text-neutral-400">{props.description}</p>
                </div>
                <div className="mt-auto flex">
                    {props.app && (
                        <LinkLight href={props.app} target="_blank" title="Go to App">
                            <ExternalLink size={16} />
                        </LinkLight>
                    )}
                    {props.github && (
                        <LinkLight href={props.app} target="_blank" title="Github Page">
                            <GitHub size={16} />
                        </LinkLight>
                    )}
                </div>
            </div>
        </div>
    );
}