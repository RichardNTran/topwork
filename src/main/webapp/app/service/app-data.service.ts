import RestClient from './rest-client';
import { API_FE_TOPWORK_URL } from 'app/config/constants';

export default class AppDataService {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  getTaskSelectionSteps() {
    return this.restClient.get('selection-steps');
  }

  getTaskSelectionStatus() {
    return this.restClient.get('selection-status');
  }

  getTaskAssignees() {
    return this.restClient.get('members', { limit: 1000 }, { baseURL: API_FE_TOPWORK_URL });
  }

  getJobsites() {
    return this.restClient.get('job-sites');
  }

  getOccupations() {
    return this.restClient.get('me/company/occupations', { limit: 1000 }, { baseURL: API_FE_TOPWORK_URL });
  }

  getJobOffers() {
    return this.restClient.get('me/company/job-offers', { limit: 1000 });
  }
}
