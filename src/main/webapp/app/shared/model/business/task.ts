import { ISelectItem } from '../layout';
enum TaskStatusType {
  none = 0,
  snooze = 2,
  archive = 1
}

enum TaskActionType {
  star = 0,
  archive = 1,
  snooze = 2
}

interface ITask {
  candidate: ICandidateUserInfo;
  company: ICompany[];
  createdAt: string;
  updatedAt: string;
  id: string;
  isStar: boolean;
  jobOffer: IJobOffer;
  selectedJobSite?: ISelectItem;
  jobSiteId?: string;
  occupationId?: string;
  selectionStatusId?: string;
  selectionStepId: string;
  snoozeTime: string;
  status: number;
  user: ICandidateUserInfo;
  entryId?: string;
  isLast?: boolean;
  interview: {
    id: string;
    startDate: string;
    endDate: string;
  };
  isManually?: number;
  furiganaName?: string;
  birthday?: any;
  attachments?: any;
  age?: any;
}

interface ICompany {
  address: string;
  description: string;
  id: string;
  name: string;
}

interface ICandidateUserInfo {
  id: string;
  fullName: string;
  gender?: string;
  age?: number;
  avatar?: string;
  appliedDate?: string;
  userUrl?: string;
}

interface IJobOffer {
  id: string;
  name: string;
  description?: string;
}

interface IAssigneeInfo {
  userInfo?: ICandidateUserInfo;
  status?: ISelectItem;
}

interface ITasksGroup {
  fullDateTime: string;
  tasks: ITask[];
  time: string;
}

interface ITasksStatistics {
  id: string;
  stared: number;
  archived: number;
  inbox: number;
  noAssigned: number;
  total: number;
  snoozed: number;
}

interface ITaskNotify {
  candidate: ICandidateUserInfo;
  stepName: string;
  snoozeTime: string;
  jobOfferTitle: string;
}

export { IJobOffer, ICandidateUserInfo, IAssigneeInfo, ITask, ITasksGroup, TaskStatusType, TaskActionType, ITasksStatistics, ITaskNotify };
