import { useNavigate } from 'react-router';
import styles from './RelatedVideoCard.module.css';

function RelatedVideoCard({ id, title, video }) {
  const { thumbnails } = video.snippet;
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/videos/watch/${id}`, { state: { video } });
  };
  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.thumbnailBox}>
        <img
          className={styles.thumbnail}
          src={thumbnails?.maxres?.url || thumbnails?.high?.url}
          alt={title}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default RelatedVideoCard;
