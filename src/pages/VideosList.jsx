import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from '../components/VideoCard';
import FakeYoutube from '../api/fakeYoutube';

function VideosList() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      const youtube = new FakeYoutube();
      return youtube.search(keyword);
    },
  });

  return (
    <div>
      <h2>Videos {keyword ? keyword : 'Trend Now🔥'}</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error has occurred! {error.message}</p>}
      {videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideosList;
