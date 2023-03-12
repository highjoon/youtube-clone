import React from 'react';

import { formatAgo, formatNumber } from '@/utils/format';

import * as Styled from './VideoCard.styles';

interface VideoThumbnailProps extends Props {
  url: string;
}

interface ChannelThumbnailProps extends Props {
  url: string;
}

export const Container = ({ className, children }: PropsWithReactNodeChildren) => {
  const handleClickCard = () => {};

  return (
    <Styled.Container className={className} onClick={handleClickCard}>
      {children}
    </Styled.Container>
  );
};

export const VideoInfo = ({ className, children }: PropsWithReactNodeChildren) => {
  return <Styled.VideoInfo className={className}>{children}</Styled.VideoInfo>;
};

export const VideoThumbnail = ({ className, url }: VideoThumbnailProps) => {
  return <Styled.VideoThumbnail className={className} url={url}></Styled.VideoThumbnail>;
};

export const Duration = ({ className, children }: PropsWithStringChildren) => {
  const content = children.substring(2, children.length - 1).replace('M', ':');

  return <Styled.Duration className={className}>{content}</Styled.Duration>;
};

export const Detail = ({ className, children }: PropsWithReactNodeChildren) => {
  return <Styled.DetailWrapper className={className}>{children}</Styled.DetailWrapper>;
};

export const VideoTitle = ({ className, children }: PropsWithStringChildren) => {
  return <Styled.VideoTitle className={className}>{children}</Styled.VideoTitle>;
};

export const MediaInfo = ({ className, children }: PropsWithReactNodeChildren) => {
  return <Styled.MediaInfoWrapper className={className}>{children}</Styled.MediaInfoWrapper>;
};

export const ChannelThumbnail = ({ className, url }: ChannelThumbnailProps) => {
  return <Styled.ChannelThumbnail className={className} src={url} />;
};

export const ChannelTitle = ({ className, children }: PropsWithStringChildren) => {
  return <Styled.ChannelTitle className={className}>{children}</Styled.ChannelTitle>;
};

export const ViewCount = ({ className, children }: PropsWithStringChildren) => {
  const content = formatNumber(Number(children));

  return <Styled.ViewCount className={className}>{content} views •</Styled.ViewCount>;
};

export const PublishedAt = ({ className, children }: PropsWithStringChildren) => {
  const formattedPublishedAt = new Date(children);
  const content = formatAgo(formattedPublishedAt);

  return <Styled.PublishedAt className={className}> {content}</Styled.PublishedAt>;
};
