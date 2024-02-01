import Link from 'next/link';
import { PropsWithChildren } from 'react';

export interface LinkLightProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

export function LinkLight(props: PropsWithChildren<LinkLightProps>) {
    const { href, ...otherProps } = props;

    return (
        <Link href={href} {...otherProps} className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-slate-800 border-2 border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
            {props.children}
        </Link>
    );
}