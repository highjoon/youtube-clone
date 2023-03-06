import { Container, Nickname, ProfileImage } from './Profile';

const Profile = Object.assign(Container, {
  Image: ProfileImage,
  Nickname,
});

export default Profile;
