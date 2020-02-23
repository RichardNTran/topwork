import { IRouteItem } from 'app/shared/model';

export const Login = '/login';
export const Home = '/home';
export const Assisants = '/assisants';
export const Topworks = '/topworks';
export const Logout = '/logout';
export const AccountInfo = '/account/info';
export const AccountForgotPassword = '/account/forgot-password';
export const AccountVerifyEmail = '/account/verify-email';
export const Register = '/register';
export const AccountNewPassword = '/account/new-password';
export const topworkPlatformRoute = {
  Login,
  Logout,
  Register,
  Home,
  Assisants,
  Topworks,
  AccountInfo,
  AccountForgotPassword,
  AccountVerifyEmail,
  AccountNewPassword
};

export const topworkPlatformRouteItem: IRouteItem[] = [{ path: Home, icon: 'home', label: 'sideBar.home' }];
