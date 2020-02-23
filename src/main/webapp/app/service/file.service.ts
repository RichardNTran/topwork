import axios from 'axios';

import RestClient from './rest-client';
import { API_FE_TOPWORK_URL } from 'app/config/constants';
import { CookiesStorage } from 'app/shared/utils';

export default class FileService {
  restClient: RestClient;
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  downloadFileSever(params) {
    const { id, name } = params;
    axios({
      url: `${API_FE_TOPWORK_URL}attachments/${id}/download`,
      method: 'GET',
      responseType: 'blob',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: CookiesStorage.getAccessToken()
      }
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name);
      document.body.appendChild(link);
      link.click();
    });
  }

  uploadAttachment(params) {
    const data = new FormData();
    data.append('files', params);

    return axios({
      url: `${API_FE_TOPWORK_URL}attachments`,
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: CookiesStorage.getAccessToken()
      },
      data
    });
  }
}
