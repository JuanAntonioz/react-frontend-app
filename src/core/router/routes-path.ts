export const RoutePath = {
  MAIN: '/',
  LOGIN_SCREEN: '/login',
  USERS_SCREEN: '/users',
} as const;
export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];
