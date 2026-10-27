import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    id: "01",
    title: "Restaurant",
    text: "Seasonal ingredients, a considered wine list, and a dining room that is genuinely worth the visit.",
  },
  {
    id: "02",
    title: "Parking",
    text: "Secure underground parking with valet service, EV charging, and 24-hour security on-site.",
  },
  {
    id: "03",
    title: "Laundry",
    text: "Same-day laundry, dry cleaning, and pressing for all garments. Drop off before breakfast, back by evening.",
  },
  {
    id: "04",
    title: "Spa & Wellness",
    text: "A full-service spa with sauna, steam room, and a complete treatment menu for every guest.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.imageWrap}>
        <Image
          src="/images/services-bg.png"
          alt="Hotel bedroom"
          fill
          sizes="100vw"
          className={styles.image}
        />
      </div>

      <div className={`container ${styles.cardWrap}`}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Hotel Services</p>
          <h2 className={styles.title}>Everything You Need</h2>

          <div className={styles.grid}>
            {services.map((service) => (
              <article key={service.id} className={styles.item}>
                <span className={styles.number}>{service.id}</span>
                <h3 className={styles.itemTitle}>{service.title}</h3>
                <p className={styles.itemText}>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}