import { Activity, Camera, Edit3, Feather, Home, Meh, Award, Printer, Smile } from 'react-feather';

export function Sidebar() {

    const links = [
        {
            name: 'home',
            href: '/',
            icon: <Home />,
            hoverIcon: <Home />
        },
        {
            name: 'about',
            href: '/about',
            icon: <Meh />,
            hoverIcon: <Smile />
        },
        {
            name: 'resume',
            href: '/resume',
            icon: <Printer />,
            hoverIcon: <Printer />
        },
        {
            name: 'blog',
            href: '/blog',
            icon: <Edit3 />,
            hoverIcon: <Edit3 />
        },
        {
            name: 'projects',
            href: '/projects',
            icon: <Award />,
            hoverIcon: <Award />
        },
        {
            name: 'photography',
            href: '/photography',
            icon: <Camera />,
            hoverIcon: <Camera />
        },
        {
            name: 'poetry',
            href: '/poetry',
            icon: <Feather />,
            hoverIcon: <Feather />
        }
    ];

    const maxLinkLength = links.reduce((acc, link) => Math.max(acc, link.name.length), 0);
    const whitespaceLink = ' '.repeat(maxLinkLength);

    return (
        <div className="fixed group/bar top-0 left-0 h-screen bg-white/15 border-r border-neutral-200 hover:border-violet-300 z-50">

            {/* This div is a hacky way I figured out for animating the bar opening and staying open even after a specific link is not hovered */}
            <div className="px-3 w-auto max-w-0 group-hover/bar:max-w-screen-xl duration-1000 group-hover/bar:duration-500 ease-out group-hover/bar:ease-in transition-[max-width]">
                <div className="flex items-center h-[1px] text-white overflow-hidden">
                    <div className="flex items-center px-2">
                        <Activity />
                        <span className="ml-2 font-mono whitespace-pre">&nbsp;{whitespaceLink}</span>
                    </div>
                </div>
            </div>

            <ul className="px-3 text-slate-600">
                {links.map((link, index) => (
                    <li key={index} className="group/link flex items-center w-100">
                        <a href={link.href} className="flex w-100 items-center py-2 group-hover/link:text-violet-700">

                            <span className="group-hover/link:hidden bg-white/50 p-1">{link.icon}</span>
                            <span className="hidden group-hover/link:block outline outline-1 outline-offset-2 bg-slate-200/50 p-1 rounded">{link.hoverIcon}</span>

                            <span className="w-100 max-w-0 rounded group-hover/link:bg-white group-hover/link:ml-2 group-hover/link:pr-2 overflow-hidden group-hover/link:max-w-screen-xl origin-left duration-300 group-hover/bar:duration-1000 ease-in-out transition-[max-width]">
                                <span className="font-mono uppercase font-light whitespace-pre">&nbsp;{link.name}</span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}