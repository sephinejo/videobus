import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import VideoCard from '../components/VideoCard';

function VideosList() {
  const { keyword } = useParams();
  const {
    isPending,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      const res = await fetch(
        `/videos/${keyword ? 'search.json' : 'popular.json'}`
      );
      const data = await res.json();
      return data.items;
    },
  });

  return (
    <div>
      <h2>Videos {keyword ? keyword : 'Trend Now🔥'}</h2>
      {isPending && <p>Loading...</p>}
      {error && <p>An error has occurred! {error.message}</p>}
      {videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideosList;
