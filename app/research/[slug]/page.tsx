import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;

async function getPost(slug: string) {
    try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
            title,
            publishedAt,
            category,
            mainImage,
            body,
            "authorName": author->name,
            "authorImage": author->image
        }`;
        const post = await client.fetch(query, { slug });
        return post;
    } catch (error) {
        return null;
    }
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;

    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container py-12 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="mb-8 text-center">
                <div className="flex justify-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="text-primary font-bold">{post.category}</span>
                    <span>•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                    {post.title}
                </h1>

                {post.authorName && (
                    <div className="flex items-center justify-center gap-3">
                        {post.authorImage && (
                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src={urlFor(post.authorImage).width(100).url()}
                                    alt={post.authorName}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <span className="font-medium text-foreground">{post.authorName}</span>
                    </div>
                )}
            </div>

            {post.mainImage && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12 shadow-lg">
                    <Image
                        src={urlFor(post.mainImage).width(1200).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="prose prose-lg dark:prose-invert mx-auto">
                <PortableText value={post.body} />
            </div>
        </article>
    );
}
