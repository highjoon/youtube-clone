/* eslint-disable react/no-unknown-property */
import { css } from '@emotion/react';

import Icon, { iconTypes } from './Icon';

export default {
  component: Icon,
  title: 'components/Icon',
};

export const Icons = () => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map(icon => (
        <li key={icon}>
          <Icon icon={icon} size={'50px'} />
          {icon}
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
