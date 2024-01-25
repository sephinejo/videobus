import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

function VideosList() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  return (
    <div>
      <h2>Videos {keyword ? keyword : 'Trending Now🔥'}</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error has occurred! {error.message}</p>}
      {videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideosList;
