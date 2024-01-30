import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styles from './VideoList.module.css';
import SideBar from '../components/SideBar';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useSearchHistory } from '../context/SearchHistoryContext';

function VideosList() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { searched, deleteHandler } = useSearchHistory();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => await youtube.search(keyword));

  return (
    <section className={styles.videosContainer}>
      <SideBar searched={searched} onDelete={deleteHandler} />

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
