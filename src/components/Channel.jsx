import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from 'react-query';
import styles from './Channel.module.css';

function Channel({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: channel } = useQuery(
    ['channel', id],
    async () => await youtube.channelDetail(id)
  );
  console.log(channel);

  return (
    <div className={styles.channelContainer}>
      <img
        className={styles.thumbnail}
        src={channel?.snippet.thumbnails.high.url}
        alt={name}
      />
      <div className={styles.nameAndStatistics}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.statistics}>
          <span>{channel?.statistics.subscriberCount} subscribers</span>
        </div>
      </div>
    </div>
  );
}

export default Channel;
