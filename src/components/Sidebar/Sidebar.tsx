import React, { createContext, useContext, useState } from 'react';

import Icon from '@/components/Icon/Icon';

import * as Styled from './Sidebar.styles';

type Icon = 'Home' | 'TrendsDefault' | 'Subscriptions';

interface MenuIconProps extends Props {
  icon: Icon;
}

interface SidebarContext extends Props {
  isHovered: boolean;
}

const initialState: SidebarContext = {
  isHovered: false,
};

export const SidebarContext: React.Context<SidebarContext> = createContext(initialState);

export const Container = ({ className, children }: PropsWithReactNodeChildren) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <SidebarContext.Provider value={{ isHovered }}>
      <Styled.Container
        className={className}
        data-testid="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Styled.Container>
    </SidebarContext.Provider>
  );
};

export const MenuIcon = ({ className, icon }: MenuIconProps) => {
  const { isHovered } = useContext(SidebarContext);

  const iconColor = isHovered ? 'var(--color-primary-red)' : 'var(--color-black-dark2)';

  return <Icon data-testid="icon" className={className} icon={icon} color={iconColor} />;
};

export const Title = ({ className, children }: PropsWithStringChildren) => {
  return (
    <Styled.Title data-testid="title" className={className}>
      {children}
    </Styled.Title>
  );
};
