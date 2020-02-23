import _ from 'lodash';
import { put, all, takeLeading, takeLatest } from 'redux-saga/effects';
import { deserializerResponse } from 'app/shared/utils/common';

import { APP_DATA_ACTION, SUCCESS, FAILURE, REQUEST } from '../constant';
import {
  ISelectUserItemServer,
  ISelectItemServer,
  IJobsiteServer,
  mappingSelectItemsToViews,
  mappingSelectUserItemsToViews,
  mappingJobsitesServerToViews,
  ISelectItem
} from 'app/shared/model';
import { appDataService } from 'app/service';

function* getAllAppData() {
  // yield getTaskSelectionSteps();
  // yield getTaskSelectionStatus();
  // yield getTaskAssignees();
  // yield getJobsites();
  // yield getOccupations();
  yield put({ type: SUCCESS(APP_DATA_ACTION.GET_ALL_APP_DATA) });
  // yield getJobOffers();
}

function* getTaskSelectionSteps() {
  try {
    const result = yield appDataService.getTaskSelectionSteps();
    const listData = yield deserializerResponse(result);
    const normalSteps: ISelectItem[] = [];
    const entrySteps: ISelectItem[] = [];
    const fullSteps = mappingSelectItemsToViews(listData as ISelectItemServer[]);
    _.map(fullSteps, step => {
      step.isEntry ? entrySteps.push(step) : normalSteps.push(step);
    });
    yield put({
      type: SUCCESS(APP_DATA_ACTION.GET_TASK_SELECTION_STEPS),
      payload: {
        taskSelectionSteps: normalSteps,
        entrySelectionSteps: entrySteps
      }
    });
  } catch (e) {
    yield put({ type: FAILURE(APP_DATA_ACTION.GET_TASK_SELECTION_STEPS), errors: e.errors });
  }
}

function* getTaskSelectionStatus() {
  try {
    const result = yield appDataService.getTaskSelectionStatus();
    const listData = yield deserializerResponse(result);
    yield put({
      type: SUCCESS(APP_DATA_ACTION.GET_TASK_SELECTION_STATUS),
      payload: { taskSelectionStatus: mappingSelectItemsToViews(listData as ISelectItemServer[]) }
    });
  } catch (e) {
    yield put({ type: FAILURE(APP_DATA_ACTION.GET_TASK_SELECTION_STATUS), errors: e.errors });
  }
}

function* getTaskAssignees() {
  try {
    const result = yield appDataService.getTaskAssignees();
    const listData = yield deserializerResponse(result);
    yield put({
      type: SUCCESS(APP_DATA_ACTION.GET_TASK_ASSIGNEES),
      payload: { taskAsignees: mappingSelectUserItemsToViews(listData as ISelectUserItemServer[]) }
    });
  } catch (e) {
    yield put({ type: FAILURE(APP_DATA_ACTION.GET_TASK_ASSIGNEES), errors: e.errors });
  }
}

function* getJobsites() {
  try {
    const result = yield appDataService.getJobsites();
    const listData = yield deserializerResponse(result);
    yield put({
      type: SUCCESS(APP_DATA_ACTION.GET_JOBSITES),
      payload: {
        jobsites: mappingJobsitesServerToViews(listData as IJobsiteServer[]),
        jobsitesEntry: listData as IJobsiteServer[]
      }
    });
  } catch (e) {
    yield put({ type: FAILURE(APP_DATA_ACTION.GET_JOBSITES), errors: e.errors });
  }
}

function* getOccupations(action?: any) {
  try {
    const result = yield appDataService.getOccupations();
    const listData = yield deserializerResponse(result);
    yield put({
      type: SUCCESS(APP_DATA_ACTION.GET_OCCUPATIONS),
      payload: { occupations: mappingSelectItemsToViews(listData as ISelectItemServer[]) }
    });

    if (action && action.payload && action.payload.callback) {
      action.payload.callback();
    }
  } catch (e) {
    yield put({ type: FAILURE(APP_DATA_ACTION.GET_OCCUPATIONS), errors: e.errors });
  }
}

function* getJobOffers() {
  try {
    const result = yield appDataService.getJobOffers();
    const listData = yield deserializerResponse(result);
    yield put({
      type: SUCCESS(APP_DATA_ACTION.GET_JOB_OFFER),
      payload: { jobOffers: mappingSelectItemsToViews(listData as ISelectItemServer[]) }
    });
  } catch (e) {
    yield put({ type: FAILURE(APP_DATA_ACTION.GET_JOB_OFFER), errors: e.errors });
  }
}

export default function* appDataSaga() {
  yield all([takeLeading(REQUEST(APP_DATA_ACTION.GET_TASK_SELECTION_STEPS), getTaskSelectionSteps)]);
  yield all([takeLeading(REQUEST(APP_DATA_ACTION.GET_TASK_SELECTION_STATUS), getTaskSelectionStatus)]);
  yield all([takeLeading(REQUEST(APP_DATA_ACTION.GET_TASK_ASSIGNEES), getTaskAssignees)]);
  yield all([takeLeading(REQUEST(APP_DATA_ACTION.GET_JOBSITES), getJobsites)]);
  yield all([takeLeading(REQUEST(APP_DATA_ACTION.GET_OCCUPATIONS), getOccupations)]);
  yield all([takeLatest(REQUEST(APP_DATA_ACTION.GET_ALL_APP_DATA), getAllAppData)]);
  yield all([takeLeading(REQUEST(APP_DATA_ACTION.GET_JOB_OFFER), getJobOffers)]);
}
