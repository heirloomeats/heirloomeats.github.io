import Link from "next/link";
import styles from "./page.module.scss";

export default function GroceryList() {
  return (
    <section id="grocery-list" className={styles.GroceryList}>
      <h1>This is the grocery list page</h1>
      <Link href="/">Back to home</Link>
    </section>
  );
}
