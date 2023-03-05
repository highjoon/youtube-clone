import { matchers } from '@emotion/jest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Sidebar from '../';

expect.extend(matchers);

describe('Sidebar', () => {
  const SidebarComponent = (
    <Sidebar>
      <Sidebar.Icon icon={'Home'} />
      <Sidebar.Title>Home</Sidebar.Title>
    </Sidebar>
  );

  it('정상적으로 렌더링됩니다.', () => {
    const { asFragment } = render(SidebarComponent);

    expect(asFragment()).toMatchSnapshot();
  });

  it('마우스 hover 시 Container 색상이 var(--color-black-dark4)로 변합니다.', () => {
    const user = userEvent.setup();

    render(SidebarComponent);

    const component = screen.getByTestId('container');

    user.hover(component);
    expect(component).toHaveStyleRule('background', 'var(--color-black-dark4)', {
      target: ':hover',
    });
  });
});
