import styles from './VideoCard.module.css';

function VideoCard({ video }) {
  return <div>{video.snippet.title}</div>;
}

export default VideoCard;
