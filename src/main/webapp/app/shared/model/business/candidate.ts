import { TypeResumeData } from 'app/shared/model';

enum CandidateType {
  EndOfSelection = 'end_of_selection_id',
  UnderSelection = 'under_selection_id'
}

interface INormalField {
  data: string;
  position: number;
  type: TypeResumeData;
}

interface IArrayField {
  data: string[];
  position: number;
  type: TypeResumeData;
}
interface IBasicInformation {
  introduction: INormalField;
  todo: INormalField;
  language: INormalField;
  toeicScore: INormalField;
  toeflScore: INormalField;
  experienceStudyingAbroad: INormalField;
  experienceOverseasWork: INormalField;
  qualification: INormalField;
  numberOfManagement: INormalField;
  currentAnnualIncome: INormalField;
  privateComment: INormalField;
  lastLoginDate: INormalField;
  lastUpdateDate: INormalField;
  registrationDate: INormalField;
}

interface IDesiredCondition {
  conditionsOther: INormalField;
  conditionsSpecial: INormalField;
  desiredIndustry: INormalField;
  desiredOccupation: INormalField;
  desiredSalary: INormalField;
  desiredWorkRegion: INormalField;
  overseasPossibleRecruitment: INormalField;
  overseasPreferredLocation: INormalField;
  workingStyleInterested: INormalField;
}

interface IEducations {
  graduationDate: INormalField;
  lessonActivity: INormalField;
  schoolName: INormalField;
  undergraduateDepartmentMajor: INormalField;
}

interface IHeader {
  attachmentFiles: INormalField;
  avatar: INormalField;
  date: INormalField;
}

interface IProfile {
  birthdayDate: INormalField;
  birthdayYearOld: INormalField;
  children: INormalField;
  email: INormalField;
  firstName: INormalField;
  isMarried: INormalField;
  lastName: INormalField;
  memo: INormalField;
  phone: INormalField;
  residence: INormalField;
  resumeId: INormalField;
  sex: INormalField;
}

interface IProfileView {
  resumeId: INormalField;
  fullName: INormalField;
  phone: INormalField;
  email: INormalField;
  isMarried: INormalField;
  children: INormalField;
  birthday: INormalField;
  sex: INormalField;
  residence: INormalField;
  memo: INormalField;
  birthdayYearOld: INormalField;
}
interface ISkill {
  experienceKnowledge: INormalField;
  skillCategory: INormalField;
}

interface IWorkHistoryExtend {
  jobSummary: INormalField;
  notices: INormalField;
  experienceType: INormalField;
  experienceIndustry: INormalField;
  numberOfExperiencedCompanies: INormalField;
  freeText: INormalField;
}

interface IJobHistory {
  department: INormalField;
  employmentStatus: INormalField;
  period: INormalField;
  companyDescription: INormalField;
  performance: INormalField;
  project: INormalField;
  responsibleWork: INormalField;
  businessDescription: INormalField;
}

interface ICompanyHistory {
  companyName: INormalField;
  jobHistories: IJobHistory[];
}

interface IEducationExtended {
  finalEducation: INormalField;
}

interface IResumeInformation {
  activities: any[];
  awardHistories: any[];
  basicInformation: IBasicInformation;
  workHistoryExtended: IWorkHistoryExtend;
  desiredCondition: IDesiredCondition;
  educations: IEducations[];
  header: IHeader;
  laboratories: any[];
  other: IOther;
  portfolios: IPortfolio[];
  profile: IProfile;
  projects: any[];
  skills: ISkill[];
  writingHistories: any[];
  companyHistories: ICompanyHistory[];
  educationExtended: IEducationExtended;
}

interface IProject {
  projectDetail: INormalField;
  projectName: INormalField;
  projectPeriod: INormalField;
}

interface ILabority {
  details: INormalField;
  laboratoryName: INormalField;
  period: INormalField;
}

interface IActivity {
  details: INormalField;
  activityName: INormalField;
  period: INormalField;
}

interface IAwardHistory {
  awardYear: INormalField;
  title: INormalField;
}

interface IResumeInformationView {
  activities: IActivity[];
  awardHistories: IAwardHistory[];
  basicInformation: IBasicInformation;
  desiredCondition: IDesiredCondition;
  educations: IEducations[];
  header: IHeader;
  laboratories: ILabority[];
  other: IOther;
  portfolios: any[];
  profile: IProfileView;
  projects: IProject[];
  skills: ISkill[];
  writingHistories: IWritingHistory[];
  workHistoryExtended: IWorkHistoryExtend;
  companyHistories: ICompanyHistory[];
  educationExtended: IEducationExtended;
}

interface IOther {
  interestingTopic: INormalField;
  relatedLinks: IArrayField;
  social: IArrayField;
}

interface IPortfolio {
  portfolioDate: INormalField;
  portfolioDescription: INormalField;
  portfolioLink: INormalField;
  portfolioMedia: INormalField;
  portfolioName: INormalField;
}
interface IAttachment {
  id: string;
  name: string;
  mineType: string;
  downloadUrl: string;
}
interface IResumeModel {
  id: string;
  companyId: string;
  jobSiteId: string;
  candidateId: string;
  information: IResumeInformation;
  attachments: IAttachment[];
}

interface IResumeModeView {
  id: string;
  companyId: string;
  jobSiteId: string;
  candidateId: string;
  information: IResumeInformationView;
  attachments: IAttachment[];
}

interface IWritingHistory {
  title: INormalField;
  writingDate: INormalField;
}

export {
  CandidateType,
  IResumeModeView,
  INormalField,
  IResumeModel,
  IResumeInformation,
  IResumeInformationView,
  IJobHistory,
  ICompanyHistory,
  IBasicInformation,
  IDesiredCondition,
  IEducations,
  IHeader,
  IOther,
  IProfile,
  ISkill,
  IProfileView,
  IProject,
  ILabority,
  IActivity,
  IAwardHistory,
  IWritingHistory,
  IPortfolio,
  IAttachment
};
