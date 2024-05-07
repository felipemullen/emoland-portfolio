import { PropsWithChildren } from 'react';

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

export function Anchor({ children, ...props }: PropsWithChildren<AnchorProps>) {
    return (
        <a target={props.target || '_blank'} className="text-blue-600 hover:text-blue-900 underline decoration-blue-600 hover:decoration-blue-900" {...props}>{children}</a>
    );
}

export function Anchor2(props: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
    return (<a {...props} target={props.target || '_blank'} className="text-sky-500 hover:text-sky-600">{props.children}</a>)
}