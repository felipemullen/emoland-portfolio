import fs from 'fs';
import path from 'path';
import { Post } from '../(blogLayout)/blog/post';

export class BlogService {
    public static blogDir = path.resolve('app/(blogLayout)/blog/posts');

    static getMarkdown(filename: string) {
        const filePath = path.join(this.blogDir, filename);
        const contents = fs.readFileSync(filePath, 'utf-8');

        if (contents.startsWith('初')) {
            const metadataSplit = contents.indexOf('終');
            const markdown = contents.substring(metadataSplit + 1);

            return markdown;
        } else {
            return contents;
        }
    }

    static getMetadata(filename: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const filePath = path.join(this.blogDir, filename);
                const readable = fs.createReadStream(filePath, 'utf8');

                readable.on('readable', function () {
                    const firstCharacter = readable.read(1);

                    if (firstCharacter == '初') {
                        let data = '';
                        let chunk = readable.read(1);
                        while (chunk !== '終') {
                            data += chunk;
                            chunk = readable.read(1);
                        }

                        readable.close();
                        resolve(data);
                    } else {
                        readable.close();
                        resolve('');
                    }
                });
            } catch (error) {
                console.log('[BlogService] Error parsing metadata:');
                console.error(error);
                reject(error);
            }
        });
    }

    static async getPosts() {
        const dir = path.resolve('app/(blogLayout)/blog/posts');
        const files = fs.readdirSync(dir);

        const posts = files.map((file) => new Post(file));

        for (const post of posts) {
            await post.readMetadata();
        }

        posts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

        return posts;
    }
}