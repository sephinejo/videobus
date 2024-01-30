import { useQuery } from 'react-query';
import Slider from 'react-slick';
import styles from './RelatedVideos.module.css';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import RelatedVideoCard from './RelatedVideoCard';

function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const { data: videos } = useQuery(
    ['videos', id],
    async () => await youtube.relatedVideos(id),
    { staleTime: 1000 * 60 * 5 }
  );

  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>RELATED VIDEOS</h2>
      <Slider {...settings}>
        {videos?.map((video) => (
          <RelatedVideoCard
            key={video.id}
            id={video.id}
            title={video.snippet?.title}
            video={video}
          />
        ))}
      </Slider>
    </section>
  );
}

export default RelatedVideos;
