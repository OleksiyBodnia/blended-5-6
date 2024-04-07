import styles from "./BlogCard.module.css"
import { formatDistanceToNow } from 'date-fns'

export const BlogCard = ({data}) => {


  return (
  // <h2>BlogCard</h2>

  <div className={styles.card}>
  <div className={styles.cardHeader}>
    <img
      className={styles.cardPoster}
      src={data.poster}
      alt={data.tag}
    />
  </div>
  <div className={styles.cardBody}>
    <span className={styles.tag}>{data.tag}</span>
    <h2 className={styles.cardTitle}>{data.title}</h2>
    <p className={styles.cardText}>
      {data.description}
    </p>
  </div>
  <div className={styles.cardFooter}>
    <div className={styles.userBox}>
      <img
        className={styles.avatar}
        src={data.avatar}
        alt={data.name}
      />
      <div>
        <h3 className={styles.userName}>{data.name}</h3>
        <small className={styles.date}>{formatDistanceToNow(
  new Date(data.postedAt),
  {addSuffix: true}
)}</small>
      </div>
    </div>
  </div>
</div>
);
};
