import { useRouter } from "next/router";
import styles from "../styles/membership.module.scss";

export default function Membership() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.card}>
      <h3 className={styles.address}>{id}</h3>
    </div>
  )
};
