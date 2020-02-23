import RestClient from './rest-client';

export default class AuthService {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  updateJWTAuthen(accessToken) {
    this.restClient.setBasicAuthAccessToken(accessToken);
  }

  getcurentAccountInfo() {
    return this.restClient.get('me');
  }

  loginEmailPassword(params) {
    return this.restClient.post('login', params);
  }
}
