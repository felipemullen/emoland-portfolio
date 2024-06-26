import { ProjectCardProps } from '@/app/components/projects/project-card'
import { ProjectSection } from '@/app/components/projects/project-section';

export default function ProjectsPage() {

    const webProjects: ProjectCardProps[] = [
        {
            image: 'shawnstone.png',
            href: 'shawn-stone',
            title: 'shawn-stone.com',
            description: 'A personal website for audiobook narrator Shawn Stone',
            // github: 'https://github.com/pastor-shawn/shawn-stone-web',
            app: 'https://shawnstonevoiceover.com/'
        },
        {
            image: 'tobindalton.png',
            href: 'tobin-dalton',
            title: 'tobindalton.com',
            description: 'A photography portfolio website for Tobin Dalton',
            // github: 'https://github.com/felipemullen/tobi-portfolio',
            app: 'https://tobindalton.com/'
        },
        {
            image: 'drefolio.gif',
            href: 'andre-mullen',
            title: 'andremullen.com',
            description: 'A photography portfolio website for Andre Mullen',
            app: 'https://dreezy.emo.land/'
        },
        {
            image: 'chord-fiddle.png',
            href: 'chord-fiddle',
            title: 'Chord Fiddle',
            description: 'Similar to jsfiddle but for composing guitar sheet music',
            github: 'https://github.com/felipemullen/chord-fiddle',
            app: 'https://chord-fiddle.web.app/'
        },
        {
            image: 'keep-nothing.png',
            href: 'keep-nothing',
            title: 'Keep Nothing',
            description: 'A local classifieds app that allows users to post items for sale and browse items for sale',
            github: 'https://github.com/felipemullen/keep-nothing',
            app: 'https://keep-nothing.com/'
        },
        {
            image: 'ind3x-games.png',
            href: 'ind3x-games',
            title: 'ind3x interactive',
            description: 'The main website for ind3x interactive',
            app: 'https://ind3x.games/'
        },
        {
            image: 'nfty.png',
            href: 'nfty',
            title: 'NFTY',
            description: 'An online NFT auction platform that features curated works by upcoming artists',
            app: 'https://nfty-prod.web.app/'
        }
    ];

    const macosProjects: ProjectCardProps[] = [
        {
            image: 'rice-paper.png',
            href: 'rice-paper',
            title: 'RicePaper: Japanese Wallpapers',
            description: 'A MacOS Tray application for daily Japanese language learning',
            // github: 'https://github.com/felipemullen/RicePaper/',
            app: 'https://apps.apple.com/us/app/ricepaper-japanese-wallpapers/id1497443393'
        }
    ];

    const pluginProjects: ProjectCardProps[] = [
        {
            image: 'tldr-panel.gif',
            href: 'tldr-panel',
            title: 'TL:DR; Panel',
            description: 'A VS Code plugin for quick and easy command lookups directly in VSCode',
            github: 'https://github.com/felipemullen/tldr-panel/',
            app: 'https://marketplace.visualstudio.com/items?itemName=felipemullen.tldr-panel'
        }
    ];

    return (
        <div className="fixed h-full w-full top-0 left-0 z-20 pl-16 pr-4 md:pr-6 overflow-y-auto">
            <div className="h-full">
                <h1 className="text-3xl font-bold uppercase text-right text-neutral-600 mt-6 mb-12">/projects</h1>
                <ProjectSection header="Web Apps" projects={webProjects} />
                <ProjectSection header="Mac OS Apps" projects={macosProjects} />
                <ProjectSection header="Plugins / Extensions" projects={pluginProjects} />
            </div>
        </div>
    );
}