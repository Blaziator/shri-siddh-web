"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";

const reviews = [
  {
    id: 1,
    name: "Sophie Andersen",
    city: "Copenhagen, Denmark",
    room: "Deluxe Room",
    text: "Everything about the stay was considered. The room was quiet, the bed was perfect, and the staff never made us feel like we were asking for too much.",
  },
  {
    id: 2,
    name: "Sophie Andersen",
    city: "Copenhagen, Denmark",
    room: "Deluxe Room",
    text: "Everything about the stay was considered. The room was quiet, the bed was perfect, and the staff never made us feel like we were asking for too much.",
  },
  {
    id: 3,
    name: "Sophie Andersen",
    city: "Copenhagen, Denmark",
    room: "Deluxe Room",
    text: "Everything about the stay was considered. The room was quiet, the bed was perfect, and the staff never made us feel like we were asking for too much.",
  },
  {
    id: 4,
    name: "Sophie Andersen",
    city: "Copenhagen, Denmark",
    room: "Deluxe Room",
    text: "Everything about the stay was considered. The room was quiet, the bed was perfect, and the staff never made us feel like we were asking for too much.",
  },
  {
    id: 5,
    name: "Sophie Andersen",
    city: "Copenhagen, Denmark",
    room: "Deluxe Room",
    text: "Everything about the stay was considered. The room was quiet, the bed was perfect, and the staff never made us feel like we were asking for too much.",
  },
  {
    id: 6,
    name: "Sophie Andersen",
    city: "Copenhagen, Denmark",
    room: "Deluxe Room",
    text: "Everything about the stay was considered. The room was quiet, the bed was perfect, and the staff never made us feel like we were asking for too much.",
  },
];

const ratingLogos = [
  { name: "Google", src: "/images/google-logo.svg", width: 50, height: 16 },
  { name: "Trustpilot", src: "/images/trustpilot-logo.svg", width: 70, height: 16 },
  { name: "Tripadvisor", src: "/images/tripadvisor-logo.svg", width: 80, height: 16 },
  { name: "Booking.com", src: "/images/booking-logo.svg", width: 80, height: 16 },
];

const GAP = 24;

export default function Reviews() {
  const trackRef = useRef(null);
  const [thumb, setThumb] = useState({ width: 30, left: 0 });

  const updateProgress = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setThumb({
      width: (clientWidth / scrollWidth) * 100,
      left: (scrollLeft / scrollWidth) * 100,
    });
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, []);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = (card ? card.offsetWidth : 300) + GAP;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="reviews" className={styles.reviews}>
      <div className={`container ${styles.header}`}>
        <div>
          <p className={styles.eyebrow}>Guest Reviews</p>
          <h2 className={styles.title}>What Guests Say</h2>
        </div>
        <div className={styles.ratings}>
          <span className={styles.stars} aria-hidden="true">★★★★★</span>
          <span className={styles.score}>4.9 out of 5</span>
          {ratingLogos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className={styles.ratingLogo}
            />
          ))}
        </div>

      </div>

      <div className={styles.track} ref={trackRef} onScroll={updateProgress}>
        {reviews.map((review) => (
          <article key={review.id} className={styles.card}>
            <div className={styles.cardStars} aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p className={styles.text}>{review.text}</p>
            <div className={styles.author}>
              <strong>{review.name}</strong>
              <span>{review.city}</span>
              <strong>Stayed at</strong>
              <strong>{review.room}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollByCard(-1)}
          aria-label="Previous review"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <div className={styles.progress}>
          <div
            className={styles.thumb}
            style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
          />
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollByCard(1)}
          aria-label="Next review"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}