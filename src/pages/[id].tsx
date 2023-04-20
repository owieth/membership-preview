import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../styles/membership.module.scss";

export default function Membership() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.2, rotateY: 180 }}
      animate={{ transition: { duration: 3 } }}
    >
      <h3 className={styles.address}>{id}</h3>
    </motion.div >
  );
}