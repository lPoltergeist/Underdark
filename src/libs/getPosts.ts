import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import strip from 'strip-markdown';

export const getPosts = async () => {
    const posts = []
    const postDirectory = path.join(process.cwd(), '/src/content/posts');
    const files = fs.readdirSync(postDirectory);

    for (const filename of files) {
        const filePath = path.join(postDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf-8');

        const data = matter(fileContents);
        const slug = filename.replace('.md', '');
        const rawExcerpt = data.content.slice(0, 200);
        const processed = await remark()
            .use(strip) // remove markdown
            .process(rawExcerpt);

        const excerpt = String(processed).trim() + "...";

        const post = {
            slug,
            title: data.data.title || '',
            excerpt: excerpt,
            thumb: data.data.thumb || '',
            //alt: data.alt || '',
            updatedAt: data.data.date || '',
        }

        posts.push(post);
    }

    return posts;
}