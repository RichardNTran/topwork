enum SocialType {
  facebook = 'www.facebook.com',
  twitter = 'twitter.com',
  linkedin = 'linkedin.com'
}

enum TypeResumeData {
  string = 'string',
  html = 'html',
  link = 'link'
}

enum TaskType {
  inbox = 'inbox',
  snooze = 'snooze',
  star = 'star',
  archive = 'archive',
  all = 'all',
  unAssignee = 'no-assignee'
}

enum TaskLogType {
  entryStep = 'update_entry',
  selectionStep = 'selection_step',
  changeAssignee = 'change_assignee',
  addInterview = 'add_interview',
  addFeedback = 'add_feedback',
  addComment = 'add_comment',
  selectionStatus = 'selection_status',
  systemLog = 'system_log'
}

enum HistoryType {
  user = 'USER',
  system = 'SYSTEM'
}

enum HistoryActionType {
  action = 1,
  message = 2,
  single = 2
}

enum TabType {
  comment = 0,
  interview = 1,
  feedback = 2
}

enum DisplayMode {
  viewOnly = 1,
  edit = 2
}

enum FilterType {
  sort = 'sort',
  query = 'q',
  filter = 'filter'
}

interface IContentProps {
  label: string;
  value: string;
  type?: TypeResumeData;
}

interface IDropdownItem {
  link?: string;
  icon?: string;
  iconSmall?: string;
  label: string;
  value?: any;
  text?: string;
  selectAction?: (value) => void;
}
interface IPagingItem {
  label?: string;
  value: number;
}

interface IRouteItem {
  path: string;
  icon: string;
  label: string;
  splitContent?: boolean;
  badge?: number;
  disable?: boolean;
}

interface ISelectItem {
  label: string;
  value: string;
  image?: string;
  priority?: number;
  isEntry?: boolean;
  type?: number;
  code?: string;
  nextSteps?: string[];
  selectionStatus?: string[];
  availableCurrentSteps?: string[];
  isInternal?: boolean;
}

export {
  IPagingItem,
  IContentProps,
  IDropdownItem,
  IRouteItem,
  ISelectItem,
  TypeResumeData,
  DisplayMode,
  TaskType,
  SocialType,
  TaskLogType,
  FilterType,
  HistoryActionType,
  HistoryType,
  TabType
};
