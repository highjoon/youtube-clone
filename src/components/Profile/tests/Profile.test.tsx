import { matchers } from '@emotion/jest';
import { render } from '@testing-library/react';

import Profile from '../';

expect.extend(matchers);

const ProfileComponent = (
  <Profile>
    <Profile.Image url={'https://avatars.githubusercontent.com/u/63948484?v=4'} />
    <Profile.Nickname>HighJoon</Profile.Nickname>
  </Profile>
);

describe('Profile', () => {
  it('정상적으로 렌더링됩니다.', () => {
    const { asFragment } = render(ProfileComponent);

    expect(asFragment()).toMatchSnapshot();
  });
});
