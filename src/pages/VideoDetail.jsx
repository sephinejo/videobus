import { useLocation } from 'react-router-dom';
import styles from './VideoDetail.module.css';
import Channel from '../components/Channel';
import RelatedVideos from '../components/RelatedVideos';
import TimeAgo from 'timeago-react';

function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { id, statistics } = video;
  const { title, publishedAt, description, channelId, channelTitle } =
    video.snippet;

  return (
    <section className={styles.container}>
      <iframe
        id='player'
        type='text/html'
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        className={styles.video}
        title={id}
      />
      <article className={styles.detailContainer}>
        <h2 className={styles.videoTitle}>{title}</h2>
        <Channel id={channelId} name={channelTitle} />
        <pre className={styles.descriptionBox}>
          <div className={styles.statisticsBox}>
            <span>
              {statistics?.viewCount
                ? statistics.viewCount + ' views'
                : 'Unknown views'}
            </span>
            <span>
              <TimeAgo datetime={publishedAt} locale='en_US' />
            </span>
          </div>
          <p className={styles.description}>
            {description ? description : 'No description'}
          </p>
        </pre>
      </article>
      <RelatedVideos id={channelId} />
    </section>
  );
}

export default VideoDetail;
