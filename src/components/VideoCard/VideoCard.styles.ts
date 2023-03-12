import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 276px;
  gap: 13px;
  cursor: pointer;
`;

export const VideoInfo = styled.div`
  position: relative;
`;

export const VideoThumbnail = styled.div<{ url: string }>`
  height: 153px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Duration = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5.5px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 4px;
  background-color: var(--color-primary-black);
  color: var(--color-primary-white);
`;

export const DetailWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const ChannelThumbnail = styled.img`
  display: inline;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const MediaInfoWrapper = styled.div``;

export const VideoTitle = styled.span`
  font-size: 14px;
  color: var(--color-primary-black);
  margin-bottom: 5px;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const ChannelTitle = styled.span`
  display: block;
  font-size: 14px;
  color: var(--color-black-dark2);
`;

export const ViewCount = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: var(--color-black-dark2);
`;

export const PublishedAt = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: var(--color-black-dark2);
`;
