const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const blogsDir = 'c:/Users/VINAY/Desktop/ProvisBio/blogs';
const outputDataFile = path.join(__dirname, 'app/blogs/blogsData.json');

async function extractBlogs() {
    try {
        const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.docx'));
        const blogs = [];

        for (const file of files) {
            const filePath = path.join(blogsDir, file);

            // Extract raw HTML
            const result = await mammoth.convertToHtml({ path: filePath });
            const html = result.value;

            // Extract plain text to generate a short excerpt
            const textResult = await mammoth.extractRawText({ path: filePath });
            let excerpt = textResult.value.substring(0, 150).trim() + "...";

            // Grab the title from the filename (removing .docx)
            let title = file.replace('.docx', '');

            // Generate a slug
            const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

            blogs.push({
                id: slug,
                title: title,
                slug: slug,
                excerpt: excerpt,
                content: html,
                date: "March 2024", // Placeholder
                category: "Industry Insights", // Placeholder
                image: "https://images.unsplash.com/photo-1532187863486-abf9db5c28cf?auto=format&fit=crop&q=80&w=1000" // Placeholder
            });
            console.log(`Processed: ${title}`);
        }

        // Ensure output dir exists
        const outDir = path.dirname(outputDataFile);
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }

        fs.writeFileSync(outputDataFile, JSON.stringify(blogs, null, 2));
        console.log(`Successfully generated ${blogs.length} blogs at ${outputDataFile}`);
    } catch (e) {
        console.error("Error extracting blogs:", e);
    }
}

extractBlogs();
