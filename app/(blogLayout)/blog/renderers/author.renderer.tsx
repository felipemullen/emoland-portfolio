import Image from 'next/image';
import { CSSProperties } from 'react';

export interface AuthorProps {
    name: string;
}

export function Author(props: AuthorProps) {

    const imageSize = 100;
    const githubProfile = `https://github.com/${props.name}`;
    const githubImage = `${githubProfile}.png`;

    const imageStyle: CSSProperties = {
        borderRadius: '50%',
        marginRight: '1rem',
    };

    return (
        <a className="my-7" href={githubProfile}>
            <hr className="my-5 border-indigo-200" />
            <div className="flex items-center justify-center">
                <Image src={githubImage} style={imageStyle} height={imageSize} width={imageSize} alt="Felipe Mullen" />
                <span className="text-secondary">By /{props.name}</span>
            </div>
            <hr className="my-5 border-indigo-200" />
        </a>
    );
}
