import styles from "./page.module.scss";
import recipeList from "../processed-recipes.js";

export default function Recipe({ params: { slug } }) {
  const selected = recipeList
    .filter((recipe) => {
      return recipe.slug === slug;
    })
    .shift();

  return (
    <section className={styles.Recipe}>
      <div className={styles.RecipeImage}>
        <img src={"https://picsum.photos/400/300"} />
      </div>
      <div className="container">
        <div className={styles.RecipeDetails}>
          <h1 className={styles.title}>{selected.recipeTitle}</h1>
          <p className={styles.servingSize}>Serving size: {selected.servingSize}</p>
          <p className={styles.time}>{selected.totalTime}</p>
          <div className={styles.cookbook}>
            <p>Recipe found in</p>
            <p className={styles.bookTitle}>
              <span className="italic">{selected.cookbook.title}</span>
            </p>
            <p>by</p>
            <p className={styles.bookAuthor}>
              <span className="italic">{selected.cookbook.author}</span>
            </p>
          </div>
        </div>

        <hr />

        <div className={styles.RecipeIngredients}>
          <h2 className={styles.subtitle}>Ingredients</h2>
          <ul className={styles.ingredients}>
            {selected.ingredients.map((item) => {
              return (
                <li key={item.id} className={styles.ingredient}>
                  <table className={styles.tableIngredient}>
                    <tbody>
                      <tr>
                        <td>{item.quantity}</td>
                        <td>{item.name}</td>
                      </tr>
                    </tbody>
                  </table>
                  {item.prep ? (
                    <table className={styles.tablePrep}>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>
                            <span className="italic">{item.prep}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

        <hr />

        <div className={styles.RecipeDirections}>
          <h2 className={styles.subtitle}>Directions</h2>
          <ol className={styles.directions}>
            {selected.steps.map((step) => {
              return (
                <li key={step.id} className={styles.step}>
                  {step.instruction}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
