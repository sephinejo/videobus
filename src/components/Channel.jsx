import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from 'react-query';
import styles from './Channel.module.css';

function Channel({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: channel } = useQuery(
    ['channel', id],
    async () => await youtube.channelDetail(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className={styles.channelContainer}>
      <img
        className={styles.thumbnail}
        src={
          channel?.snippet?.thumbnails?.high.url ||
          channel?.snippet?.thumbnails?.medium.url ||
          channel?.snippet?.thumbnails?.default.url ||
          'https://images.unsplash.com/photo-1596854307943-279e29c90c14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt={name}
      />
      <div className={styles.nameAndStatistics}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.statistics}>
          <span>
            {channel?.statistics?.subscriberCount
              ? channel.statistics.subscriberCount + ' subscribers'
              : 'Unknown subscribers'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Channel;
