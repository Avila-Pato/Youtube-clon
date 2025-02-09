import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Card and vehicles",
  "Comdedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];

async function main() {
  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));
    await db.insert(categories).values(values);
  } catch (error) {
    console.error("Error enviando categorias", error);
    process.exit(1);
  }
}

main();
