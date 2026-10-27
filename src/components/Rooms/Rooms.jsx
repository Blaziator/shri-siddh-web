import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./Rooms.module.css";

const rooms = [
  {
    id: 1,
    type: "Standard",
    name: "Classic Room",
    price: "₹1999",
    image: "/images/room-classic.png",
    specs: [
      { icon: "/images/icon-bed.svg", label: "90 Sq Ft" },
      { icon: "/images/icon-size.svg", label: "1 Bed" },
      { icon: "/images/icon-guests.svg", label: "3 Sleeps" },
    ],
  },
  {
    id: 2,
    type: "Deluxe",
    name: "Deluxe Room",
    price: "₹3999",
    image: "/images/room-deluxe.png",
    specs: [
      { icon: "/images/icon-bed.svg", label: "90 Sq Ft" },
      { icon: "/images/icon-size.svg", label: "1 Bed" },
      { icon: "/images/icon-guests.svg", label: "3 Sleeps" },
    ],
  },
  {
    id: 3,
    type: "Suite",
    name: "Penthouse Suite",
    price: "₹5999",
    image: "/images/room-penthouse.png",
    specs: [
      { icon: "/images/icon-bed.svg", label: "90 Sq Ft" },
      { icon: "/images/icon-size.svg", label: "1 Bed" },
      { icon: "/images/icon-guests.svg", label: "3 Sleeps" },
    ],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className={styles.rooms}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Rooms &amp; Suites</p>
            <h3 className={styles.title}>Find Your Room</h3>
          </div>
          <Button href="#rooms">View Rooms →</Button>
        </div>

        <div className={styles.grid}>
          {rooms.map((room) => (
            <article key={room.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.meta}>
                <span className={styles.type}>{room.type}</span>
                <span className={styles.price}>
                  Start <strong>{room.price}</strong>/ night
                </span>
              </div>

              <h3 className={styles.name}>{room.name}</h3>

              <ul className={styles.specs}>
                {room.specs.map((spec) => (
                  <li key={spec.label} className={styles.spec}>
                    <Image src={spec.icon} alt="" width={16} height={16} />
                    {spec.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}