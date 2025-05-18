import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryName = [
    "Film & Animation",
    "Autos & Vehicles",
    "Music",
    "Pets & Animals",
    "Sports",
    "Short Movies",
    "Travel & Events",
    "Gaming",
    "Videoblogging",
    "People & Blogs",
    "Comedy",
    "Entertainment",
    "News & Politics",
    "Howto & Style",
    "Education",
    "Science & Technology",
    "Nonprofits & Activism",
    "Movies",
    "Anime/Animation",
    "Action/Adventure",
    "Classics",
    "Comedy (Movies)",
    "Documentary",
    "Drama",
    "Family",
    "Foreign",
    "Horror",
    "Sci-Fi/Fantasy",
    "Thriller",
    "Shorts",
    "Shows",
    "Trailers",
];


async function main() {
    try {
        const values = categoryName.map((name) => ({
            name,
            description: `Video releated to ${name.toLowerCase()}`
        }))
        await db.insert(categories).values(values);
        console.log("category Seeded successfullly..")
    } catch (error) {
        console.error("Error Seeding Categories..", error);
        process.exit(1);
    }
}
main();