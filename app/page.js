// import Image from "next/image";
// import Link from "next/link";
import styles from "./page.module.scss";
// import Canvas from "./components/Canvas";

export default function Home() {
  return (
    <section id="home" className={styles.Home}>
      {/* <Canvas data={{ id: "canvas" }} /> */}
      <div>
        <h1>Heirloom Eats</h1>
        <p>A recipe blog of my family&apos;s favorite recipes.</p>
      </div>
      {/* <Link href="/menu">View the menu!</Link>
      <Link href="/meal-plan">See your current meal plan!</Link>
      <Link href="/grocery-list">Checkout your shopping list!</Link> */}
    </section>
  );
}
