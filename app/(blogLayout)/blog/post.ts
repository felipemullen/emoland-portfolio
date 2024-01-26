import { BlogService } from '../../services/blog.service';

export interface PostMetadata {
    author?: string;
    publishedDate?: string;
    tags?: string[];
}

export class Post {
    private _fullname: string;
    private _metadata: PostMetadata = {};

    /**
     * @param fullname The filename of the post, e.g. 0001_post-title.md
     */
    constructor(fullname: string) {
        this._fullname = fullname;
    }

    get publishedDate() {
        return this._metadata?.publishedDate || new Date();
    }

    get author() {
        return this._metadata?.author;
    }

    /**
     * Easy to read slug: 0001_post-title.md -> post-title
     */
    get slug() {
        return this._fullname.split('_')[1].split('.')[0];
    }

    /**
     * The number of the post: 0001_post-title.md -> 0001
     */
    get id() {
        return this._fullname.split('_')[0];
    }

    get href() {
        return `/blog/${this.slug}`;
    }

    get title() {
        return this.slug.replace(/-/g, ' ');
    }

    public readMarkdown() {
        return BlogService.getMarkdown(this._fullname);
    }

    public async readMetadata() {
        if (this._metadata) {
            return;
        } else {
            const data = await BlogService.getMetadata(this._fullname);
            if (data?.trim()) {
                try {
                    const metadata = JSON.parse(data.trim());
                    this._metadata = metadata;
                    console.log('metadata loaded', this._metadata);
                } catch (error) {
                    console.log('[Post] Error parsing metadata:');
                    console.error(error);
                }
            }
        }
    }
}