import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styles from './VideoList.module.css';
import SideBar from '../components/SideBar';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

function VideosList({ searched, onDelete }) {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  return (
    <section className={styles.videosContainer}>
      <SideBar searched={searched} onDelete={onDelete} />

      {isLoading && <p>Loading...</p>}
      {error && <p>An error has occurred! {error.message}</p>}
      <div className={styles.videosBox}>
        {videos?.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

export default VideosList;
