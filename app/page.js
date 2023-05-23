import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1>home</h1>
      </div>
    </div>
  );
}
