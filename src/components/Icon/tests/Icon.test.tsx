import { render } from '@testing-library/react';

import Icon from '../Icon';

describe('Icon', () => {
  const IconComponent = <Icon icon="Home" />;
  it('정상적으로 렌더링됩니다.', () => {
    const { asFragment } = render(IconComponent);

    expect(asFragment()).toMatchSnapshot();
  });
});
