import { nanoid } from '@reduxjs/toolkit';
import AdminTemplate from '@Templates/AdminTemplate';
import UserTemplate from '@Templates/UserTemplate';
import React, { lazy } from 'react';

const HomePage = lazy(() => import('@Pages/HomePage'));
const ProfilePage = lazy(() => import('@/Pages/ProfilePage/ProfileUpdate'));
const SignInPage = lazy(() => import('@Pages/SignInPage'));
const SignUpPage = lazy(() => import('@Pages/SignUpPage'));
const DetailPage = lazy(() => import('@Pages/DetailPage'));
const RoomPage = lazy(() => import('@Pages/RoomPage'));
const NotFoundPage = lazy(() => import('@Pages/NotFoundPage'));

const DashBoardPage = lazy(() => import('@Pages/AdminPage/DashBoardPage'));

const LocationManagerPage = lazy(() => import('@Pages/AdminPage/LocationManagerPage'));
const LocationManagerEditPage = lazy(() =>
  import('@Pages/AdminPage/LocationManagerPage/LocationManagerEditPage')
);
const LocationManagerProfilePage = lazy(() =>
  import('@Pages/AdminPage/LocationManagerPage/LocationManagerProfilePage')
);
const UserManagerPage = lazy(() => import('@Pages/AdminPage/UserManagerPage'));
const UserManagerEditPage = lazy(() =>
  import('@Pages/AdminPage/UserManagerPage/UserManagerEditPage')
);
const UserManagerProfilePage = lazy(() =>
  import('@Pages/AdminPage/UserManagerPage/UserManagerProfilePage')
);

const RoomManagerPage = lazy(() => import('@Pages/AdminPage/RoomManagerPage'));
const RoomManagerEditPage = lazy(() =>
  import('@Pages/AdminPage/RoomManagerPage/RoomManagerEditPage')
);
const RoomManagerProfilePage = lazy(() =>
  import('@Pages/AdminPage/RoomManagerPage/RoomManagerProfilePage')
);

const EvaluateManagerPage = lazy(() => import('@Pages/AdminPage/EvaluateManagerPage'));

const TicketManagerPage = lazy(() => import('@Pages/AdminPage/TicketManagerPage'));

export const routerUserTemplate = [
  { path: process.env.REACT_APP_LINK_SIGN_IN, componentPage: SignInPage },
  { path: process.env.REACT_APP_LINK_SIGN_UP, componentPage: SignUpPage },
  { path: process.env.REACT_APP_LINK_HOME, componentPage: HomePage },
  { path: process.env.REACT_APP_LINK_PROFILE, componentPage: ProfilePage },
  { path: process.env.REACT_APP_LINK_DETAIL + '/:idRoom', componentPage: DetailPage },
  { path: process.env.REACT_APP_LINK_ROOM + '/:cityName', componentPage: RoomPage },
  { path: process.env.REACT_APP_LINK_NOT_FOUND, componentPage: NotFoundPage },
];

export const routerAdminTemplate = [
  { path: process.env.REACT_APP_LINK_ADMIN_DASH_BOARD, componentPage: DashBoardPage },
  { path: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER, componentPage: RoomManagerPage },
  { path: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_EDIT, componentPage: RoomManagerEditPage },
  {
    path: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER_PROFILE,
    componentPage: RoomManagerProfilePage,
  },
  { path: process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER, componentPage: LocationManagerPage },
  {
    path: process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_EDIT,
    componentPage: LocationManagerEditPage,
  },
  {
    path: process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER_PROFILE,
    componentPage: LocationManagerProfilePage,
  },
  { path: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER, componentPage: UserManagerPage },
  { path: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_EDIT, componentPage: UserManagerEditPage },
  {
    path: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER_PROFILE,
    componentPage: UserManagerProfilePage,
  },
  {
    path: process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER,
    componentPage: EvaluateManagerPage,
  },
  {
    path: process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER,
    componentPage: TicketManagerPage,
  },
];

const renderUserTemplate = (() => {
  //Need Declare same id to react can't switch case properly in react-router
  const idUserTemplate = nanoid();
  return routerUserTemplate.map(({ componentPage, path }) => (
    <UserTemplate key={idUserTemplate} Component={componentPage} path={path} exact />
  ));
})();

const renderAdminTemplate = (() => {
  const idAdminTemplate = nanoid();
  return routerAdminTemplate.map(({ componentPage, path }) => (
    <AdminTemplate key={idAdminTemplate} Component={componentPage} path={path} exact />
  ));
})();

export const routerTemplates = [...renderAdminTemplate, ...renderUserTemplate];
