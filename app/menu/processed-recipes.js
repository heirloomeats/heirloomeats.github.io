import recipesRaw from "./recipes.json";
import { v4 as uuidv4 } from "uuid";

const recipesProcessed = recipesRaw.map((recipe) => {
  function toKebabCase(str) {
    return str
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll(/[^\w\s]+/g, "") // all non-word characters, aka punctuation
      .replaceAll(" ", "-");
  }

  const title = toKebabCase(recipe.recipeTitle);
  const author = toKebabCase(recipe.cookbook.author);
  const slug = `${title}_${author}`;

  return { ...recipe, ...{ slug: `${slug}`, id: uuidv4() } };
  // NEVER USE UUID AS A DOC ID IN PRODUCTION
});

export default recipesProcessed;
