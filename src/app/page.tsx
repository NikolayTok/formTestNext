import Link from "next/link";
import styles from "./styles/page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={`/form/1`} className={styles.buttonStart}>
        Go
      </Link>
    </main>
  );
}
