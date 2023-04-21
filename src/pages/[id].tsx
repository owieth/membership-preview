import { useRouter } from "next/router";
import styles from "../styles/membership.module.scss";

export default function Membership() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.front}>
          <h3 className={styles.address}>{id}</h3>
        </div>
        <div className={styles.back}>
          <h3 className={styles.address}>Back!</h3>
        </div>
      </div>
    </div>
  );
}