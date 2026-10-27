"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const ratingLogos = [
  { name: "Google", src: "/images/google-logo.svg", width: 70, height: 20 },
  { name: "Trustpilot", src: "/images/trustpilot-logo.svg", width: 90, height: 20 },
  { name: "Tripadvisor", src: "/images/tripadvisor-logo.svg", width: 100, height: 20 },
  { name: "Booking.com", src: "/images/booking-logo.svg", width: 100, height: 20 },
];

export default function Hero() {
  const [guests, setGuests] = useState(2);

  const decrease = () => setGuests((g) => Math.max(1, g - 1));
  const increase = () => setGuests((g) => Math.min(20, g + 1));

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/hero-bg.png"
          alt="Shri Siddh Hotel lobby"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Welcome to Shri Siddh Hotel</p>
          <h1 className={styles.title}>A Place Truly Worth Staying</h1>
          <p className={styles.subtext}>
            Rooms, suites, and villas designed for rest. Dining worth booking.
            <br />
            A team that anticipates before you ask.
          </p>

          <div className={styles.actions}>
            <Link href="#rooms" className={styles.btnPrimary}>
              View Rooms →
            </Link>
            <Link href="#story" className={styles.btnOutline}>
              Our Story
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <form
            className={styles.booking}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.field}>
              <label htmlFor="checkin" className={styles.srOnly}>
                Check in date
              </label>
              <input
                id="checkin"
                type="date"
                className={styles.input}
                placeholder="Check in Date"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="checkout" className={styles.srOnly}>
                Check out date
              </label>
              <input
                id="checkout"
                type="date"
                className={styles.input}
                placeholder="Check out Date"
              />
            </div>

            <div className={`${styles.field} ${styles.guestField}`}>
              <span className={styles.guestLabel}>Guest</span>
              <div className={styles.counter}>
                <button
                  type="button"
                  onClick={decrease}
                  aria-label="Decrease guests"
                  className={styles.counterBtn}
                >
                  −
                </button>
                <span className={styles.count}>
                  {String(guests).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={increase}
                  aria-label="Increase guests"
                  className={styles.counterBtn}
                >
                  +
                </button>
              </div>
            </div>

            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <Image
                src="/images/whatsapp-logo.svg"
                alt=""
                width={25}
                height={25}
              />
              Booking Enquiry →
            </a>
          </form>

          <div className={styles.ratings}>
            <div className={styles.score}>
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span>4.9 out of 5</span>
            </div>
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
      </div>
    </section>
  );
}