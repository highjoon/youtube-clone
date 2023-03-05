/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

import * as icons from '@/assets/icons';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export interface IconProps {
  icon: IconType;
  color?: string;
  size?: string | number;
  className?: string;
}

const Icon = ({ icon, color, size = 24, className }: IconProps) => {
  // eslint-disable-next-line import/namespace
  const Icon = icons[icon];

  return (
    <Icon
      data-testid={'icon'}
      className={className}
      css={{
        fill: color || 'currentcolor',
        width: size,
        height: 'auto',
      }}
    />
  );
};

export default Icon;
