import React from 'react';

import * as Styled from './Profile.styles';

interface Props {
  className?: string;
}

interface ContainerProps extends Props {
  children: React.ReactNode;
}

interface ImageProps extends Props {
  url: string;
}

interface NicknameProps extends Props {
  children: string;
}

export const Container = ({ children }: ContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export const ProfileImage = ({ url }: ImageProps) => {
  return <Styled.Image url={url} />;
};

export const Nickname = ({ children }: NicknameProps) => {
  return <Styled.Nickname>{children}</Styled.Nickname>;
};
