import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  padding: 8px 24px;
  gap: 23px;
`;

export const Image = styled.div<{ url: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
`;

export const Nickname = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary-black);
`;
