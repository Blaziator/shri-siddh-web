import Image from "next/image";
import styles from "./Facilities.module.css";

const facilities = [
  {
    id: 1,
    title: "Exclusive Suites",
    text: "Experience refined luxury in elegantly designed suites with premium comfort and exceptional privacy.",
    image: "/images/facility-suites.png",
  },
  {
    id: 2,
    title: "Free Wi-Fi",
    text: "Stay connected with complimentary high-speed Wi-Fi throughout your stay.",
    image: "/images/facility-wifi.png",
  },
  {
    id: 3,
    title: "Infinity Pools",
    text: "Relax in stunning infinity pools with breathtaking views and a serene atmosphere.",
    image: "/images/facility-pool.png",
  },
  {
    id: 4,
    title: "Spa & Wellness",
    text: "Rejuvenate your mind and body with soothing spa treatments and relaxing experiences.",
    image: "/images/facility-spa.png",
  },
  {
    id: 5,
    title: "24/7 Hotel Staff",
    text: "Enjoy round-the-clock assistance from our dedicated team, always ready to make your stay exceptional.",
    image: "/images/facility-staff.png",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className={styles.facilities}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Hotel Facilities</p>
            <h2 className={styles.title}>Our Luxorefi Hotel Facilities</h2>
          </div>
          <p className={styles.intro}>
            This luxury hotel services as the perfect retreat for both leisure and business guests.
          </p>
        </div>

        <div className={styles.grid}>
          {facilities.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className={styles.image}
                />
              </div>
              <h3 className={styles.name}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}