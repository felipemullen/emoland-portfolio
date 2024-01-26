import { PropsWithChildren } from 'react';

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

export function Anchor({ children, ...props }: PropsWithChildren<AnchorProps>) {
    return (
        <a className="text-blue-600 hover:text-blue-900 underline decoration-blue-600 hover:decoration-blue-900" {...props}>{children}</a>
    );
}