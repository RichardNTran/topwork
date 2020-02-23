import RestClient from './rest-client';
import AuthService from './auth.service';
import AppDataService from './app-data.service';
import NotifyService from './notify.service';
import FileService from './file.service';

const restClient = new RestClient();

export const authService = new AuthService(restClient);
export const appDataService = new AppDataService(restClient);
export const notifyService = new NotifyService(restClient);
export const fileService = new FileService(restClient);
