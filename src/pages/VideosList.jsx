import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from '../components/VideoCard';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';

function VideosList() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.search(keyword);
    },
  });

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
