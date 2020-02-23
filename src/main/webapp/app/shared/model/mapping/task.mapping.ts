import _ from 'lodash';
import moment from 'moment';

import { ISelectItem } from '../layout';
import { ISelectItemServer, ISelectUserItemServer, IJobsiteServer, ITask, ITasksGroup, ISelectInterview, JobSite } from '../business';
import { DAY_MONTH_LOCALE, APP_TIME_FORMAT, APP_YEAR_MONTH_DATE_FORMAT } from 'app/shared/constant';
import i18next from 'app/shared/locales';

function mappingSelectUserItemServerToView(item: ISelectUserItemServer) {
  const selectItem: ISelectItem = {
    label: item.fullName,
    value: item.id,
    image: item.avatar
  };
  return selectItem;
}

function mappingSelectItemServerToView(item: ISelectItemServer) {
  const selectItem: ISelectItem = {
    ...item,
    label: item.name,
    value: item.id,
    image: item.image,
    priority: item.priority || null,
    isEntry: item.isEntry || null,
    availableCurrentSteps: item.availableCurrentSteps || null
  };
  return selectItem;
}

function mappingSelectItemsToViews(items: ISelectItemServer[]) {
  const selectItems: ISelectItem[] = [];
  items.forEach(element => {
    selectItems.push(mappingSelectItemServerToView(element));
  });
  return selectItems;
}

function mappingSelectUserItemsToViews(items: ISelectUserItemServer[]) {
  const selectItems: ISelectItem[] = [];
  items.forEach(element => {
    selectItems.push(mappingSelectUserItemServerToView(element));
  });
  return selectItems;
}

function mappingJobsiteServerToView(item: IJobsiteServer) {
  const selectItem: ISelectItem = {
    label: item.title,
    value: item.id,
    image: item.title === JobSite.another || item.isInternal ? null : `content/images/logos/jobsite/${item.title}.png`,
    isInternal: item.isInternal
  };
  return selectItem;
}

function mappingJobsitesServerToViews(item: IJobsiteServer[]) {
  const selectItems: ISelectItem[] = [];
  item.forEach(element => {
    selectItems.push(mappingJobsiteServerToView(element));
  });
  return selectItems;
}

function mappingTasksToTaskGroups(items: ITask[], isSnooze?: boolean) {
  const momentLocale = i18next.language === 'ja' ? 'ja' : 'en';
  moment.locale(momentLocale);
  const taskGroups: ITasksGroup[] = [];
  const grouped = _.groupBy(items, item => {
    if (isSnooze) {
      return moment(item.snoozeTime)
        .startOf('day')
        .format();
    }
    return moment(item.updatedAt)
      .startOf('day')
      .format();
  });
  _.forEach(grouped, (value, key) => {
    taskGroups.push({
      fullDateTime: key,
      time: moment(key).isSame(moment(), 'day') ? i18next.t('taskInbox.today') : moment(key).format(DAY_MONTH_LOCALE),
      tasks: value
    });
  });
  return taskGroups;
}

function mappingInterview(item: ISelectInterview) {
  const selectItem: ISelectInterview = {
    id: item.id,
    value: item.id,
    label: `${moment(item.startDate).format(APP_YEAR_MONTH_DATE_FORMAT)} ${moment(item.startDate).format(APP_TIME_FORMAT)} ~ ${moment(
      item.endDate
    ).format(APP_TIME_FORMAT)} ${item.title || ''}`,
    startDate: item.startDate,
    endDate: item.endDate,
    place: item.place,
    selectionStep: item.selectionStep,
    title: item.title
  };
  return selectItem;
}

function mappingInterviewList(items: ISelectInterview[]) {
  const selectItems: ISelectInterview[] = [];
  items.forEach(element => {
    selectItems.push(mappingInterview(element));
  });
  return selectItems;
}

export {
  mappingSelectItemServerToView,
  mappingSelectItemsToViews,
  mappingSelectUserItemsToViews,
  mappingJobsitesServerToViews,
  mappingTasksToTaskGroups,
  mappingInterview,
  mappingInterviewList
};
