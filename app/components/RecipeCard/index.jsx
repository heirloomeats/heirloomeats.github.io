import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Link from "next/link";

const RecipeCard = ({
  key,
  recipe: {
    recipeImage,
    recipeTitle,
    servingSize,
    totalTime,
    cookbook: { title, author },
    slug,
    id,
  },
}) => {
  return (
    <article className={styles.RecipeCard} key={key}>
      <Link href={`/menu/${slug}`}>
        <div className={styles.RecipeImage}>
          <Image
            src={"https://picsum.photos/400/300"}
            alt="Lorem picsum"
            width={400}
            height={300}
          />
        </div>

        <div className={styles.RecipeDetails}>
          <h2 className={styles.title}>{recipeTitle}</h2>
          <p className={styles.servingSize}>Serving size: {servingSize}</p>
          <p className={styles.time}>{totalTime}</p>
          <div className={styles.cookbook}>
            <p>Recipe found in:</p>
            <p className={styles.bookitle}>
              <span className="italic">{title}</span>
            </p>
            <p>by</p>
            <p className={styles.bookAuthor}>
              <span className="italic">{author}</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

RecipeCard.propTypes = {
  key: PropTypes.string.isRequired,
  recipe: PropTypes.object.isRequired,
};

export default RecipeCard;

/*

<RecipeCard key={recipe.id} recipe={recipe} />

*/
