import VideoCard from '.';

export default {
  component: VideoCard,
  title: 'Components/VideoCard',
};

export const _VideoCard = () => (
  <VideoCard>
    <VideoCard.VideoInfo>
      <VideoCard.VideoThumbnail
        url={
          'https://blog.snappa.com/wp-content/uploads/2020/01/BestYoutubeThumbnailSize_Blogpost.jpg'
        }
      />
      <VideoCard.Duration>PT4M13S</VideoCard.Duration>
    </VideoCard.VideoInfo>
    <VideoCard.Detail>
      <VideoCard.ChannelThumbnail url={'https://avatars.githubusercontent.com/u/63948484?v=4'} />
      <VideoCard.MediaInfo>
        <VideoCard.VideoTitle>
          {`The Dark Knight Rises (2012) - Batman's Sacrifice Scene (9/10) Batman's Sacrifice Scene
          (9/10)`}
        </VideoCard.VideoTitle>
        <VideoCard.ChannelTitle>Movieclips Trailers</VideoCard.ChannelTitle>
        <VideoCard.ViewCount>60000000</VideoCard.ViewCount>
        <VideoCard.PublishedAt>2023-01-12T06:06:22Z</VideoCard.PublishedAt>
      </VideoCard.MediaInfo>
    </VideoCard.Detail>
  </VideoCard>
);
