const config = {
  VERSION: process.env.VERSION
};

export default config;

export const API_FE_TOPWORK_URL = process.env.API_FE_TOPWORK_URL;
export const FE_TOPWORK_URL = process.env.FE_TOPWORK_URL;

export const CLOUD_FRONT = process.env.CLOUD_FRONT;

export const FCM_APP_NAME = process.env.FCM_APP_NAME;
export const FCM_APP_ID = process.env.FCM_APP_ID;
export const FCM_API_KEY = process.env.FCM_API_KEY;
export const FCM_PROJECT_ID = process.env.FCM_PROJECT_ID;
export const FCM_MESSAGING_SENDER_ID = process.env.FCM_MESSAGING_SENDER_ID;
export const FCM_USE_PUBLIC_VAPI_KEY = process.env.FCM_USE_PUBLIC_VAPI_KEY;

export const SENTRY_ENV = process.env.SENTRY_ENV; // development, testing, staging, production
export const ENV = process.env.SENTRY_ENV;
export const DSN = 'https://';
export const serviceName = 'TOPWORK Platform';

export const AUTHORITIES = {
  ADMIN: 'ROLE_ADMIN',
  USER: 'ROLE_USER'
};

export const messages = {
  DATA_ERROR_ALERT: 'Internal Error'
};

export const MEDIUM_DEVICE_MIN = 992;
export const LARGE_DEVICE_MIN = 1200;
