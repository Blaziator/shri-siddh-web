import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./Gallery.module.css";

const images = [
  { id: 1, src: "/images/gallery-1.png", alt: "Hotel reception with guests", wide: true },
  { id: 2, src: "/images/gallery-2.png", alt: "Guest by a curtained window" },
  { id: 3, src: "/images/gallery-3.png", alt: "Hotel dining room" },
  { id: 4, src: "/images/gallery-4.png", alt: "Poolside loungers" },
  { id: 5, src: "/images/gallery-5.png", alt: "Bedroom with teal cushions" },
  { id: 6, src: "/images/gallery-6.png", alt: "Spacious suite bedroom", wide: true },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Gallery</p>
            <h2 className={styles.title}>Explore Your Dream Hotel</h2>
          </div>
          <Button href="#gallery">View Gallery →</Button>
        </div>

        <div className={styles.grid}>
          {images.map((img) => (
            <div
              key={img.id}
              className={`${styles.item} ${img.wide ? styles.wide : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={img.wide ? "50vw" : "25vw"}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}