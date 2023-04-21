import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../styles/membership.module.scss";

export default function Membership() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <motion.div
      className={styles.card}
      whileHover={{ rotateY: 180 }}
      transition={{
        rotateY: { duration: 0.5, delay: 0.25, }
      }}
    >
      <h3 className={styles.address}>{id}</h3>
    </motion.div >
  );
}