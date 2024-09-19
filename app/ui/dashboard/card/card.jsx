import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
      </div>
    </div>
  );
};

export default Card;
