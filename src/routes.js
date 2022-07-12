import React from 'react';

const Home = React.lazy(() => import('./views/Home/index'));
const MarketPlace = React.lazy(() => import('./views/Marketplace/index'));
const SellTokens = React.lazy(() => import('./views/SellTokens/index'));
const Team2 = React.lazy(() => import('./views/Team2/index'));
const Learn = React.lazy(() => import('./views/Learn/index'));
const FAQ = React.lazy(() => import('./views/FAQ/index'));
const Affiliate = React.lazy(() => import('./views/Affiliate/index'));
const MyAccount = React.lazy(() => import('./views/MyAccount/index'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/marketplace', name: 'MarketPlace', component: MarketPlace },
  { path: '/sell-tokens', name: 'SellTokens', component: SellTokens },
  { path: '/team', name: 'Team2', component: Team2 },
  { path: '/learn', name: 'Learn', component: Learn },
  { path: '/faq', name: 'FAQ', component: FAQ },
  { path: '/affiliate', name: 'Affiliate', component: Affiliate },
  { path: '/my-account', name: 'MyAccount', component: MyAccount },
];

export default routes;
