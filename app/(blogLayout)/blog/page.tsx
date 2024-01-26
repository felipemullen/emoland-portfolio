import { Suspense } from 'react';
import { BlogService } from '../../services/blog.service';
import localFont from 'next/font/local';
import { Spinner } from '../../components/spinner';
import { BlogpostSnippet } from '../../components/blog/blogpost-snippet.component';

const avenir = localFont({
    src: '../../../fonts/AvenirNextCondensed-UltraLight.ttf'
});

export default async function BlogHome() {
    const posts = await BlogService.getPosts();

    return (
        <div className="m-4">
            <h2 className="my-5 text-neutral-500 uppercase">
                <span className={`text-nowrap font-bold text-3xl ${avenir.className}`}>Latest Posts</span>
            </h2>

            <Suspense fallback={<Spinner />}>
                <div>
                    {posts.slice(0, 20).map(post => (
                        <BlogpostSnippet key={post.id} post={post} />
                    ))}
                </div>
            </Suspense>
        </div>
    );
}