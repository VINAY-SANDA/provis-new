import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import blogsData from "../blogsData.json";
import BlogPostContent from "@/app/blogs/[slug]/BlogPostContent"; // Re-validated absolute import


export function generateStaticParams() {
    return blogsData.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: "Blog Not Found | Provis Biolabs",
        };
    }

    return {
        title: `${blog.title} | Provis Biolabs Insights`,
        description: blog.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
                <h1 className="text-3xl font-bold text-[#1E3A8A]">Blog post not found.</h1>
            </div>
        );
    }

    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <div className="flex-grow">
                <BlogPostContent blog={blog} />
            </div>
            <Footer />
        </main>
    );
}
