import React, { useRef, useState } from "react";
import styles from "../styles/EmailForm.module.scss";
import Image from "next/image";
import emailLogo from "../public/assets/email.svg";
import successLogo from "../public/assets/success.svg";
const X_MASTER_KEY = "$2b$10$uhP" + process.env.z;
const BIN_ID = process.env.NEXT_PUBLIC_BIN_ID;

const EmailForm = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess(true);
  }
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    if (!validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": X_MASTER_KEY,
        },
        body: JSON.stringify({
          email,
        }),
      });
      if (response.ok) {
        setSuccess(true);
        setEmail("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Refer friends and get rewards</h1>
      <p>
        Refer your friends to us and earn hotel booking vouchers. We&apos;ll
        give you 1 coin for each friend that installs our extension. Minimum
        cash-out at 20 coins.
      </p>
      {error && <div className={styles.error}>Please type a correct email</div>}
      {success && (
        <div className={styles.success}>
          <Image src={successLogo} alt="success" width={22} height={20} />
          <span>Your email is confirmed!</span>
        </div>
      )}

      {success ? (
        <div className={styles.copyBtn}>
          <input
            type="text"
            ref={textAreaRef}
            value="https://ratepunk.com/referral/test"
          />
          <button type="button" onClick={copyToClipboard}>
            {copySuccess ? "Copied" : "Copy"}
          </button>
          <div className={styles.referAgain} onClick={() => setSuccess(false)}>
            <small>Refer Again</small>
          </div>
        </div>
      ) : (
        <div className={styles.inputGroup}>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            id={styles.input}
          />
          <div className={styles.image}>
            <Image src={emailLogo} alt="email logo" width={22} height={20} />
          </div>
          <button type="button" onClick={handleSubmit}>
            Get Referral Link
          </button>
        </div>
      )}
      <div className={styles.formFooter}>Limits on max rewards apply.</div>
    </div>
  );
};

export default EmailForm;
