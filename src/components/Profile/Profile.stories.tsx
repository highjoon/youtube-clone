import Profile from '.';

export default {
  component: Profile,
  title: 'Components/Profile',
};

export const _Profile = () => (
  <Profile>
    <Profile.Image url={'https://avatars.githubusercontent.com/u/63948484?v=4'} />
    <Profile.Nickname>HighJoon</Profile.Nickname>
  </Profile>
);
