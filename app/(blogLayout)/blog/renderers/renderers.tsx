import { CSSProperties } from 'react';
import { Author } from './author.renderer';

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
    if (props.inline) {
        return (<code {...props}>{children}</code>);
    }

    const value = String(children).replace(/\n$/, '');

    if (props.className === 'language-author') {
        return (<Author name={value}></Author>);
    }

    return (<code {...props}>{value}</code>);
}

export const customComponents = {
    img: ImgRenderer,
    a: AnchorRenderer,
    code: CodeRenderer
};