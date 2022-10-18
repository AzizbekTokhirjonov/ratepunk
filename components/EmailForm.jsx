import React, { useState } from "react";
import styles from "../styles/EmailForm.module.scss";
import Image from "next/image";
import email from "../public/assets/email.svg";
import successLogo from "../public/assets/success.svg";

const EmailForm = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className={styles.container}>
      <h1>Refer friends and get rewards</h1>
      <p>
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>
      {error && <div className={styles.error}>Error State</div>}
      {success && (
        <div className={styles.success}>
          <Image src={successLogo} alt="success" width={22} height={20} />
          <span>Your email is confirmed!</span>
        </div>
      )}
      <div className={styles.inputGroup}>
        <input
          type="email"
          required
          placeholder="Enter your email address"
          id={styles.input}
        />
        <div className={styles.image}>
          <Image src={email} alt="email logo" width={22} height={20} />
        </div>
        <button>Get Referral Link</button>
      </div>
      <div className={styles.formFooter}>Limits on max rewards apply.</div>
    </div>
  );
};

export default EmailForm;
