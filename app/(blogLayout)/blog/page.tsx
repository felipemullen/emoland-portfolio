import { Suspense } from 'react';
import { BlogService } from '../../services/blog.service';
import { Spinner } from '../../components/spinner';
import { BlogpostSnippet } from '../../components/blog/blogpost-snippet.component';

export const dynamic = 'force-dynamic';

export default async function BlogHome() {
    const posts = await BlogService.getPosts();

    return (
        <div className="m-4">
            <h2 className="my-5 text-slate-700 dark:text-neutral-400">
                <span className="text-nowrap font-bold text-2xl">LATEST POSTS</span>
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