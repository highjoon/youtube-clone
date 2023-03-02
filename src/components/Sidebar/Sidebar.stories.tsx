import Sidebar from './Sidebar';

export default {
  component: Sidebar,
  title: 'components/Sidebar',
};

export const HomeSidebar = () => <Sidebar icon={'Home'} />;

export const TrendsDefaultSidebar = () => <Sidebar icon={'TrendsDefault'} />;

export const SubscriptionsSidebar = () => <Sidebar icon={'Subscriptions'} />;
