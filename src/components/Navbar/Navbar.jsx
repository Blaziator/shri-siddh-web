import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const leftLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "#rooms" },
    { label: "Services", href: "#services" },
    { label: "Dining", href: "#dining" },
];

const rightLinks = [
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#story" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar(){
    return(
        <header className={styles.navbar}>
            <nav className={`container ${styles.inner}`}>
                <ul className={`${styles.links} ${styles.left}`}>
                    {leftLinks.map((link)=> (
                        <li key={link.label}>
                            <Link href={link.href} className={styles.link}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo.svg"
                        alt="Shri Siddh"
                        width={170}
                        height={36}
                        priority
                    />
                </Link>

                <ul className={`${styles.links} ${styles.right}`}>
                    {rightLinks.map((link)=>(
                        <li key={link.label}>
                            <Link href={link.href} className={styles.link}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}