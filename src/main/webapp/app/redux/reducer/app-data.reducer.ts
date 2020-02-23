import { SUCCESS, FAILURE, APP_DATA_ACTION } from '../constant';
import { ISelectItem, IJobsiteServer } from 'app/shared/model';

const initialState = {
  taskSelectionSteps: null as ISelectItem[],
  taskSelectionStatus: null as ISelectItem[],
  taskAsignees: null as ISelectItem[],
  jobsites: null as ISelectItem[],
  occupations: null as ISelectItem[],
  jobOffers: null as ISelectItem[],
  entrySelectionSteps: null as ISelectItem[],
  jobsitesEntry: null as IJobsiteServer[]
};

export type AppDataState = Readonly<typeof initialState>;

export default (state: AppDataState = initialState, action): AppDataState => {
  switch (action.type) {
    case SUCCESS(APP_DATA_ACTION.GET_TASK_SELECTION_STEPS):
      const { taskSelectionSteps, entrySelectionSteps } = action.payload;
      return {
        ...state,
        taskSelectionSteps,
        entrySelectionSteps
      };
    case SUCCESS(APP_DATA_ACTION.GET_TASK_SELECTION_STATUS):
      const { taskSelectionStatus } = action.payload;
      return {
        ...state,
        taskSelectionStatus
      };
    case SUCCESS(APP_DATA_ACTION.GET_TASK_ASSIGNEES):
      const { taskAsignees } = action.payload;
      return {
        ...state,
        taskAsignees
      };
    case SUCCESS(APP_DATA_ACTION.GET_JOBSITES):
      const { jobsites, jobsitesEntry } = action.payload;
      return {
        ...state,
        jobsites,
        jobsitesEntry
      };
    case SUCCESS(APP_DATA_ACTION.GET_OCCUPATIONS):
      const { occupations } = action.payload;
      return {
        ...state,
        occupations
      };
    case SUCCESS(APP_DATA_ACTION.GET_JOB_OFFER):
      const { jobOffers } = action.payload;
      return {
        ...state,
        jobOffers
      };
    case FAILURE(APP_DATA_ACTION.GET_TASK_SELECTION_STEPS):
    case FAILURE(APP_DATA_ACTION.GET_TASK_SELECTION_STATUS):
    case FAILURE(APP_DATA_ACTION.GET_TASK_ASSIGNEES):
    case FAILURE(APP_DATA_ACTION.GET_JOBSITES):
    case FAILURE(APP_DATA_ACTION.GET_OCCUPATIONS):
    case FAILURE(APP_DATA_ACTION.GET_JOB_OFFER):
      return state;
    default:
      return state;
  }
};
