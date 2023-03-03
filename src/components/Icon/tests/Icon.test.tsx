import { render } from '@testing-library/react';

import Icon from '../Icon';

describe('Icon', () => {
  it('정상적으로 렌더링됩니다.', () => {
    render(<Icon icon="Home" />);
  });
});
