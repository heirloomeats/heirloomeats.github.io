// import Link from "next/link";
import styles from "./page.module.scss";
// import { v4 as uuidv4 } from "uuid";
import recipes from "./processed-recipes.js";
import RecipeCard from "@/app/components/RecipeCard";

export default function Menu() {
  return (
    <section id="menu" className={styles.Menu}>
      {recipes.map((recipe, index) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </section>
  );
}
