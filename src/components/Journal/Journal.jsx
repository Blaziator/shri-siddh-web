import Image from "next/image";
import Link from "next/link";
import styles from "./Journal.module.css";

const posts = [
  {
    id: 1,
    title: "A Local Guide to the Neighbourhood",
    excerpt:
      "Six things worth seeing, eating, and doing within walking distance of Shri Siddh.",
    date: "Oct 15, 2025",
    image: "/images/journal-1.png",
    href: "#",
  },
  {
    id: 2,
    title: "A Local Guide to the Neighbourhood",
    excerpt:
      "Six things worth seeing, eating, and doing within walking distance of Shri Siddh.",
    date: "Oct 15, 2025",
    image: "/images/journal-2.png",
    href: "#",
  },
  {
    id: 3,
    title: "A Local Guide to the Neighbourhood",
    excerpt:
      "Six things worth seeing, eating, and doing within walking distance of Shri Siddh.",
    date: "Oct 15, 2025",
    image: "/images/journal-3.png",
    href: "#",
  },
];

export default function Journal() {
  return (
    <section id="blog" className={styles.journal}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>From Our Journal</p>
          <h2 className={styles.title}>Stories Worth Staying For</h2>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <Link href={post.href} className={styles.link}>
                <div className={styles.imageWrap}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.name}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <time className={styles.date}>{post.date}</time>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}