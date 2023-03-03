import { render } from '@testing-library/react';

import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  it('정상적으로 렌더링됩니다.', () => {
    render(<Sidebar icon="Home" />);
  });
});
