import React from 'react';

import * as Styled from './Profile.styles';

interface ImageProps extends Props {
  url: string;
}

export const Container = ({ className, children }: PropsWithReactNodeChildren) => {
  return <Styled.Container className={className}>{children}</Styled.Container>;
};

export const ProfileImage = ({ className, url }: ImageProps) => {
  return <Styled.Image className={className} url={url} />;
};

export const Nickname = ({ className, children }: PropsWithStringChildren) => {
  return <Styled.Nickname className={className}>{children}</Styled.Nickname>;
};
