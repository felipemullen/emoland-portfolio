import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import localFont from 'next/font/local';
import { Post } from '../post';
import { customComponents } from '../renderers/renderers';
import { TimeAgo } from '../../../components/time-ago';
import { Frown } from 'react-feather';
import { LeavePostOrBlog } from '../../../components/blog/leave-post-blog.component';
import { Author } from '../renderers/author.renderer';

const avenir = localFont({
    src: '../../../../fonts/AvenirNextCondensed-UltraLight.ttf'
});

export default async function BlogPageView({ params }: any) {

    const dir = path.resolve('app/(blogLayout)/blog/posts');
    const posts = fs.readdirSync(dir);

    const file = posts.find(f => f.includes(params.id));

    if (!file) {
        return (
            <div className="flex flex-col items-center pt-5">
                <Frown size={50} />
                <p className="mt-3">It appears I haven&apos;t yet written about that!</p>
            </div>
        );
    }

    const post = new Post(file);
    await post.readMetadata();

    return (
        <div className="m-7">
            <div className="mb-7">
                <h2 className={`${avenir.className} text-neutral-500 uppercase text-4xl`}>{post.title}</h2>
                <div className="font-light lowercase">
                    <small>Published <TimeAgo date={post.publishedDate} /></small>
                </div>
            </div>
            <ReactMarkdown className="prose dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-800" remarkPlugins={[remarkGfm]} components={customComponents}>
                {post.readMarkdown()}
            </ReactMarkdown>

            <Author name="felipemullen" />

            <div className="flex mb-7">
                <LeavePostOrBlog />
            </div>
        </div>
    );

}