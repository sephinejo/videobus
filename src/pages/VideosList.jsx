import { useParams } from 'react-router-dom';

function VideosList() {
  const { keyword } = useParams();

  return <div>VideosList {keyword ? keyword : '🔥'}</div>;
}

export default VideosList;
