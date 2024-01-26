import { format } from 'timeago.js';
import { useNavigate } from 'react-router-dom';
import styles from './VideoCard.module.css';

function VideoCard({ video }) {
  const { id, statistics } = video;
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/videos/watch/${id}`, { state: { video } });
  };

  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.thumbnailBox}>
        <img
          className={styles.thumbnail}
          src={thumbnails.maxres?.url || thumbnails.high.url}
          alt={title}
        />
      </div>
      <h4 className={styles.channelTitle}>{channelTitle}</h4>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.publishedAtViewBox}>
        {format(publishedAt, 'en_US')}﹒{statistics?.viewCount} views
      </p>
    </div>
  );
}

export default VideoCard;
