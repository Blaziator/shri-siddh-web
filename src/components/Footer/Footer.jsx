import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "Rooms", href: "#rooms" },
      { label: "Services", href: "#services" },
      { label: "Dining", href: "#dining" },
      { label: "Gallery", href: "#gallery" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const contact = [
  "1 Grand Avenue, City Centre",
  "+91 - 1234567890",
  "info@shrisiddh.com",
];

const socials = [
  { name: "Instagram", icon: "/images/icon-instagram.svg", href: "https://instagram.com" },
  { name: "Facebook", icon: "/images/icon-facebook.svg", href: "https://facebook.com" },
  { name: "YouTube", icon: "/images/icon-youtube.svg", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.logoWrap}>
          <Link href="/" aria-label="Shri Siddh Hotel home">
            <Image
              src="/images/golden-logo.svg"
              alt="Shri Siddh"
              width={220}
              height={56}
            />
          </Link>
        </div>

        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4 className={styles.heading}>{col.title}</h4>
              <ul className={styles.list}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.column}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.list}>
              {contact.map((line) => (
                <li key={line} className={styles.text}>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Social</h4>
            <ul className={styles.socials}>
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                  >
                    <Image src={s.icon} alt="" width={22} height={22} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Shri Siddh. All rights reserved.</p>
          <p>Crafted By Kontent Kraft Digital</p>
        </div>
      </div>
    </footer>
  );
}