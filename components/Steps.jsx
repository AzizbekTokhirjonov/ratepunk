import Image from "next/image";
import styles from "../styles/Steps.module.scss";
import coinCollector from "../public/assets/collect-coins.svg";
import invite from "../public/assets/invite.svg";
import voucher from "../public/assets/voucher.svg";

const Steps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.step}>
        <div className={styles.image}>
          <Image src={invite} alt="invite photo" width={128} height={140} />
        </div>
        <div className={styles.text}>
          <div className={styles.stepTitle}>Step 1</div>
          <div className={styles.title}>Invite Friends</div>
          <div className={styles.paragraph}>
            Refer friends with your unique referral link.
          </div>
        </div>
      </div>
      <div className={styles.step2}>
        <div className={styles.text}>
          <div className={styles.stepTitle}>Step 2</div>
          <div className={styles.title}>Collect Coins</div>
          <div className={styles.paragraph}>
            Get 1 coin for each friend that installs our extension using your
            referral link.
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src={coinCollector}
            alt="coin collector"
            width={144}
            height={144}
          />
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.image}>
          <Image src={voucher} alt="voucher" width={144} height={144} />
        </div>
        <div className={styles.text}>
          <div className={styles.stepTitle}>Step 3</div>
          <div className={styles.title}>Get Voucher</div>
          <div className={styles.paragraph}>
            Redeem for a $20 hotel booking voucher once you collect 20 coins.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
