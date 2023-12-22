import Link from "next/link";
import styles from "./page.module.scss";

export default function MealPlan() {
  return (
    <section id="meal-plan" className={styles.MealPlan}>
      <h1>This is the meal plan page</h1>
      <Link href="/">Back to home</Link>
    </section>
  );
}
