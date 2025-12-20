import { ResearchCard } from "@/components/ResearchCard";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Revalidate every 60 seconds
export const revalidate = 60;

const DEMO_POSTS = [
    {
        title: "Trade Turbulence & Economic Recalibration: Q2 Outlook Under Pressure",
        date: "Oct 12, 2025",
        category: "Macro Strategy",
        excerpt: "Analyzing the escalating trade tensions and their direct impact on global supply chains and central bank policy recalibrations.",
        href: "/research/trading-turbulence",
        image: "/research/trading-turbulence.jpg",
    },
    {
        title: "Global Markets on Edge: Inflation, Trade Wars & Policy Shifts",
        date: "Oct 10, 2025",
        category: "Global Markets",
        excerpt: "An in-depth analysis of renewed inflationary pressures and the escalating trade tensions reshaping the global economic landscape.",
        href: "/research/global-markets-edge",
        image: "/research/global-markets-edge.jpg",
    },
    {
        title: "Global Markets in Flux: Dollar Slides, Euro Eyes Key Levels",
        date: "Oct 05, 2025",
        category: "FX Analysis",
        excerpt: "Technical and fundamental breakdown of the US Dollar's recent weakness and the critical resistance levels for the Euro.",
        href: "/research/global-markets-flux",
        image: "/research/global-markets-flux.jpg",
    },
];

async function getPosts() {
    try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
            title,
            "slug": slug.current,
            publishedAt,
            category,
            excerpt,
            mainImage
        }`;
        const posts = await client.fetch(query);
        return posts;
    } catch (error) {
        console.error("Sanity fetch failed (likely missing Project ID):", error);
        return [];
    }
}

export default async function ResearchPage() {
    const posts = await getPosts();
    const hasPosts = posts && posts.length > 0;
    const displayPosts = hasPosts ? posts : DEMO_POSTS;

    return (
        <div className="container py-12 px-4 md:px-6">
            <h1 className="text-4xl font-serif font-bold mb-8">Latest Research</h1>

            {!hasPosts && (
                <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-lg text-sm">
                    <strong>Note:</strong> Showing demo content. To see real content, please configure your Sanity Project ID in <code>.env.local</code> and publish posts via <a href="/studio" className="underline font-bold">/studio</a>.
                </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayPosts.map((post: any, i: number) => (
                    <ResearchCard
                        key={i}
                        title={post.title}
                        date={hasPosts ? new Date(post.publishedAt).toLocaleDateString() : post.date}
                        category={post.category || "Uncategorized"}
                        excerpt={post.excerpt}
                        href={hasPosts ? `/research/${post.slug}` : post.href}
                        image={hasPosts && post.mainImage ? urlFor(post.mainImage).width(800).url() : post.image}
                    />
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button variant="outline">Load More</Button>
            </div>
        </div>
    );
}
