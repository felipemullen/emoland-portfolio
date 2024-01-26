import { CSSProperties } from 'react';
import { Post } from '../../(blogLayout)/blog/post';
import { TimeAgo } from '../time-ago';

export interface BlogpostSnippetProps {
    post: Post;
}

export function BlogpostSnippet({ post }: BlogpostSnippetProps) {
    const linkStyles: CSSProperties = {
        textDecoration: 'none',
        fontSize: '1.1rem'
    };

    const idStyles: CSSProperties = {
        fontSize: '1.1rem',
        color: '#808080'
    };

    return (
        <div className="flex mb-3">
            <div style={idStyles} className="font-mono">#{post.id}</div>
            <div className="ms-4">
                <a style={linkStyles} className="text-blue-600 hover:text-blue-800" href={post.href}>
                    <span className="capitalize">{post.title}</span>
                </a>
                {post.author &&
                    <span className="text-neutral-400 font-light">
                        <small className="ms-2 me-1">by</small>
                        <span>{post.author}</span>
                    </span>
                }
                <div className="font-light lowercase">
                    <small>Published <TimeAgo date={post.publishedDate} /></small>
                </div>
            </div>
        </div>
    );
}