import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';
import { remark } from 'remark';
import remarkHtml from 'remark-html/lib';
import strip from 'strip-markdown';

export const getArticle = async (slug: string) => {
    let post: any
    const postDirectory = path.join(process.cwd(), '/src/content/posts');
    const fileName = fs.readdirSync(postDirectory).filter(file => file === `${slug}.md`);

    for (const filename of fileName) {
        const filePath = path.join(postDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf-8');


        const data = matter(fileContents);
        const rawContent = await marked.parse(data.content);

        const content = String(rawContent)

        return content
    }

}