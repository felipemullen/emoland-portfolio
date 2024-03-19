import { CSSProperties } from 'react';
import { Components } from 'react-markdown';

export function AnchorRenderer(props: any) {
    return (<a {...props} target="_blank" className="" rel="noopener noreferrer" />);
}

export function ImgRenderer(props: { alt: string; }) {
    const styles: CSSProperties = {
        width: '100%'
    };

    if (props.alt) {
        const overrides = props.alt.split(';');
        for (const override of overrides) {
            const [key, value] = override.split(':');
            styles[key] = value;
        }
    }

    {/* eslint-disable-next-line @next/next/no-img-element */ }
    return (<img {...props} className="rounded" style={styles} alt="image" />);
}

export function CodeRenderer({ children, ...props }) {
    const value = String(children).replace(/\n$/, '');

    // return (<code className="before:content-[''] after:content-[''] text-sm text-gray-500 bg-gray-200 p-1 rounded whitespace-pre">{value}</code>);
    return (<small>{value}</small>);
}

export const customComponents: Components = {
    img: ImgRenderer,
    a: AnchorRenderer,
    code: CodeRenderer
};