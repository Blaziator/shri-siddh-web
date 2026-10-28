import Image from "next/image";
import styles from "./VideoBanner.module.css";

export default function VideoBanner() {
  return (
    <section className={styles.banner}>
      <Image
        src="/images/video-banner.png"
        alt="Hotel bedroom with towel swans"
        fill
        sizes="100vw"
        className={styles.media}
      />

      <button type="button" className={styles.play} aria-label="Play video">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </section>
  );
}