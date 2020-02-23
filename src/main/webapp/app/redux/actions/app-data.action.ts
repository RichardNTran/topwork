import { APP_DATA_ACTION, REQUEST } from '../constant';

export function getTaskSelectionSteps() {
  return {
    type: REQUEST(APP_DATA_ACTION.GET_TASK_SELECTION_STEPS)
  };
}

export function getTaskSelectionStatus() {
  return {
    type: REQUEST(APP_DATA_ACTION.GET_TASK_SELECTION_STATUS)
  };
}

export function getTaskAssignees() {
  return {
    type: REQUEST(APP_DATA_ACTION.GET_TASK_ASSIGNEES)
  };
}

export function getJobsites() {
  return {
    type: REQUEST(APP_DATA_ACTION.GET_JOBSITES)
  };
}

export function getOccupations(data?: any) {
  return {
    type: REQUEST(APP_DATA_ACTION.GET_OCCUPATIONS),
    payload: data
  };
}

export function getAllAppData() {
  return {
    type: REQUEST(APP_DATA_ACTION.GET_ALL_APP_DATA)
  };
}

export function getJobOffers() {
  return {
    type: REQUEST(APP_DATA_ACTION.GET_JOB_OFFER)
  };
}
