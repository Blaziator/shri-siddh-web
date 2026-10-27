import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <section id="story" className={styles.story}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>Our Story</p>
        <h2 className={styles.title}>A Hotel Built to Last</h2>
        <p className={styles.body}>
          We believe a great stay comes down to three things: the right room,
          honest food, and a team that genuinely cares. Independently owned and
          locally rooted since 2009.
        </p>
        <Button href="#story">Our Story →</Button>
      </div>

      <div className={styles.imageWrap}>
        <Image
          src="/images/story-building.png"
          alt="Shri Siddh Hotel building at dusk"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={styles.image}
        />
      </div>
    </section>
  );
}