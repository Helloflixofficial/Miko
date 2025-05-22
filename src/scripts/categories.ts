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




// https://github.com/shubho0908/YouTube-clone-MERN/assets/81776711/72a75a7e-e20b-4639-ac14-13c490329dbf