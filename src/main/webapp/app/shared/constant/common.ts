export const MAX_LENGHT_200 = 200;
export const MIN_LENGTH_8 = 8;
export const APP_DATE_FORMAT = 'DD/MM/YY HH:mm';
export const APP_TIMESTAMP_FORMAT = 'DD/MM/YY HH:mm:ss';
export const APP_LOCAL_DATE_FORMAT = 'DD/MM/YYYY';
export const MONTH_YEAR_JAPAN_FORMAT = 'YYYY年MM月';
export const MONTH_YEAR_NORMAL_FORMAT = 'YYYY-MM';
export const APP_LOCAL_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm';
export const APP_LOCAL_DATETIME_FORMAT_Z = 'YYYY-MM-DDTHH:mm Z';
export const APP_WHOLE_NUMBER_FORMAT = '0,0';
export const APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT = '0,0.[00]';
export const DATE_TIME_FORMAT_CANDIATE_CREATED_AT = 'YYYY/MM/DD(月) HH:mm 応募';
export const TASK_APPLIED_DATE_FORMAT = 'YYYY/MM/DD HH:mm 応募';
export const CANDIDATE_SNOOZE_DATE_FORMAT = 'YYYY/MM/DD HH:mm';
export const DAY_MONTH_LOCALE = 'MM/DD (dd)';
export const DATE_FORMAT_TASK_NOTIFY = 'YYYY/MM/DD(月) HH:mm';
export const APP_MONTH_DATE_FORMAT = 'MM/DD (ddd)';
export const APP_TIME_FORMAT = 'H:mm';
export const INTERVIEW_DATE_FORMAT = 'YYYY/MM/DD HH:mm';
export const APP_YEAR_MONTH_DATE_FORMAT = 'YYYY/MM/DD (ddd)';
export const APP_YEAR_MONTH_DATE_INTERVIEW = 'YYYY/MM/DD (ddd) HH:mm';
export const APP_YEAR_MONTH_DATE_TIME_FORMAT = 'YYYY/MM/DD HH:mm';
export const APPLIED_DATE_FORMAT = 'YYYY/MM/DD';
export const APPLIED_TIME_FORMAT = 'HH:mm 応募';
export const CRAWLER_FORMAT_DATETIME = 'YYYY-MM-DD';
export const CONVERT_CRAWLER_FORMAT_DATETIME = 'YYYY年MM月DD日';
export const regexEmail = /^[\wＡ-ﾟ-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const regextDomain = /^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i;
export const HEADER_HEIGHT = 60;
export const ENTRY_STEP = 'ENTRY';
export enum UserRole {
  admin = '管理者',
  recruiter = 'リクルーター'
}
export enum CookieKey {
  accessToken = 'accessToken-topwork',
  pastUrl = 'pastUrl-topwork',
  deviceToken = 'deviceToken-topwork',
  userRole = 'userRole-topwork'
}
export enum TabInboxType {
  snooze = 'snooze',
  inbox = 'inbox'
}
export const lgSize = 1200;
export enum StatusType {
  NewEntry = 1,
  WaittingDoccument = 2,
  Decline = 3,
  DurringSchedule = 4,
  ScheduleAdjustment = 5,
  WaittingEvaluation = 6,
  WaittingNextSelectionGuide = 7,
  WaittingContactSent = 8,
  WaittingJobOfferAction = 9,
  WaittingDeliveryNGContact = 10,
  WaittingJobOfferNotification = 11,
  AdjustingOfferInterviews = 12,
  OfferInterviewsAlready = 13,
  WaittingConsentReply = 14
}
export const listStatusComment = [
  StatusType.NewEntry,
  StatusType.DurringSchedule,
  StatusType.ScheduleAdjustment,
  StatusType.WaittingEvaluation,
  StatusType.WaittingNextSelectionGuide,
  StatusType.WaittingContactSent
];

export const evaluations = [
  { value: '1', label: 'A' },
  { value: '2', label: 'B' },
  { value: '3', label: 'C' },
  { value: '4', label: '不合格' }
];

export const listStatusInterview = [StatusType.WaittingDoccument];

export const listStatusWaittingInterview = [StatusType.Decline];

export enum CandidateActionType {
  Create = 'create',
  Edit = 'edit'
}
