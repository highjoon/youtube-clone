import Sidebar from './';

export default {
  component: Sidebar,
  title: 'components/Sidebar',
};

export const HomeSidebar = () => (
  <Sidebar>
    <Sidebar.Icon icon={'Home'} />
    <Sidebar.Title>Home</Sidebar.Title>
  </Sidebar>
);

export const TrendsDefaultSidebar = () => (
  <Sidebar>
    <Sidebar.Icon icon={'TrendsDefault'} />
    <Sidebar.Title>TrendsDefault</Sidebar.Title>
  </Sidebar>
);

export const SubscriptionsSidebar = () => (
  <Sidebar>
    <Sidebar.Icon icon={'Subscriptions'} />
    <Sidebar.Title>Subscriptions</Sidebar.Title>
  </Sidebar>
);
