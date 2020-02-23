import RestClient from './rest-client';

export default class NotifyService {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  subscribe(params) {
    return this.restClient.post('subscriptions', params);
  }

  unsubscribe(params) {
    return this.restClient.delete('subscriptions', params);
  }
}
