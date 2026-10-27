import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ href, children, className = "", ...props }) {
  const classes = `${styles.button} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}