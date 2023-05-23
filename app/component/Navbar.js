import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Link href="/loginn">
        <h1>Login</h1>
      </Link>
      <Link href="/register">
        <h1>Register</h1>
      </Link>
    </div>
  );
}
