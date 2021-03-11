import AuthorListing from './pages/authors/author-listing-container';
import PostListing from './pages/posts/post-listing-container';
import LoginPage from './pages/onboarding/login-container';
import SignUp from './pages/onboarding/singup-container';
import AuthorDetail from './pages/authors/author-detail-container';
import MyAccount from './pages/onboarding/myaccount-container';

import AuthorFilters from './pages/authors/author-listing-filter-container';
import NotFound from './components/not-found';
const isLoggedIn = localStorage.getItem('token');

export const routes = [
  {
    path: '/',
    label: 'Authors',
    layout_type: 1,
    component: {
      sidebar: AuthorFilters,
      main: AuthorListing,
    },
    hide_on_auth: false,
  },
  {
    path: '/posts',
    label: 'Posts',
    layout_type: 3,
    component: {
      sidebar: '',
      main: PostListing,
    },
    hide_on_auth: false,
  },
  {
    path: '/my-account',
    label: 'My Account',
    layout_type: 3,
    component: {
      sidebar: '',
      main: MyAccount,
    },
    hide_on_auth: !isLoggedIn,
  },
  {
    path: '/login',
    label: 'Login',
    layout_type: 3,
    component: {
      sidebar: '',
      main: LoginPage,
    },
    hide_on_auth: isLoggedIn,
  },
  {
    path: '/sign-up',
    label: 'Sign Up',
    layout_type: 3,
    component: {
      sidebar: '',
      main: SignUp,
    },
    hide_on_auth: isLoggedIn,
  },
  {
    path: '/profile/:id',
    layout_type: 2,
    component: {
      sidebar: AuthorDetail,
      main: PostListing,
    },
  },
  {
    path: '*',
    layout_type: 3,
    component: {
      sidebar: '',
      main: NotFound,
    },
  },
];
