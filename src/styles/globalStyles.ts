import { css } from '@emotion/react';
import normalize from 'emotion-normalize';

const GlobalStyles = css`
  ${normalize}

  :root {
    --color-primary-red: #ff0000;
    --color-primary-black: #0a0a0a;
    --color-primary-white: #ffffff;
    --color-black-dark1: #3b3b3b;
    --color-black-dark2: #6c6c6c;
    --color-black-dark3: #9d9d9d;
    --color-black-dark4: #cecece;
    --color-red-dark1: #350000;
    --color-red-dark2: #680000;
    --color-red-dark3: #9a0000;
    --color-red-dark4: #cd0000;
    --color-red-light1: #ff3232;
    --color-red-light2: #ff6565;
    --color-red-light3: #ff9797;
    --color-red-light4: #ffcaca;
  }

  *,
  html,
  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
