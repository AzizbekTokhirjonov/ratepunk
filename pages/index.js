import Head from "next/head";
import Image from "next/image";
import EmailForm from "../components/EmailForm";
import Shop from "../components/Shop";
import Steps from "../components/Steps";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <div className={styles.emailForm}>
            <EmailForm />
          </div>
          <div className={styles.steps}>
            <Steps />
          </div>
        </div>
      </div>
      <div className={styles.shopContainer}>
        <Shop />
      </div>
    </div>
  );
}
