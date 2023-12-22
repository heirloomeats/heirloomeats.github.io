import "./globals.scss";
import styles from "./layout.module.scss";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import bgImage from "./media/images/backgrounds/bg-butcher-dark.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heirloom Eats",
  description: "A personal recipe blog for some of our favorite meals!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main
          id="main"
          className={styles.main}
          style={{
            backgroundImage: `url(${bgImage.src})`,
          }}
        >
          <div className={styles.contentBuffer}>
            <div className="container">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
