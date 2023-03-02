import React, { useState } from 'react';

import Icon from '@/components/Icon/Icon';

import * as Styled from './Sidebar.styles';

interface Props {
  className?: string;
  icon: 'Home' | 'TrendsDefault' | 'Subscriptions';
}

const Sidebar = ({ className, icon }: Props) => {
  const [isHovered, setIshovered] = useState<boolean>(false);

  const iconColor = isHovered ? 'var(--color-primary-red)' : 'var(--color-black-dark2)';

  return (
    <Styled.SidebarWrapper
      className={className}
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
    >
      <Icon icon={icon} color={iconColor} />
      <Styled.Title>{icon}</Styled.Title>
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
