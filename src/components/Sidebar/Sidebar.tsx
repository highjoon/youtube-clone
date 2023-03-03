import React, { useState } from 'react';

import Icon from '@/components/Icon/Icon';

import * as Styled from './Sidebar.styles';

interface Props {
  className?: string;
  icon: 'Home' | 'TrendsDefault' | 'Subscriptions';
}

const Sidebar: React.FC<Props> = ({ className, icon }) => {
  const [isHovered, setIshovered] = useState<boolean>(false);

  const iconColor = isHovered ? 'var(--color-primary-red)' : 'var(--color-black-dark2)';

  return (
    <Styled.Wrapper
      className={className}
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
    >
      <Icon icon={icon} color={iconColor} />
      <Styled.Title>{icon}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default Sidebar;
