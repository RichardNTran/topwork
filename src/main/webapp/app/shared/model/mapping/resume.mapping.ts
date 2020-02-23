import _ from 'lodash';

import {
  IProfile,
  IProfileView,
  IResumeModel,
  IResumeModeView,
  IResumeInformation,
  IResumeInformationView,
  IEducations,
  IDesiredCondition,
  IProject,
  ILabority,
  IActivity,
  IAwardHistory
} from '../business';
import i18next from 'app/shared/locales';
import { handleBreakAndGroupData, convertDateTimeFullCrawler, convertYearMonthJapan, convertPeriodDataFull } from 'app/shared/utils';

function mappingProfileToProfileView(profile: IProfile) {
  const profileView: IProfileView = {
    resumeId: profile.resumeId,
    fullName: {
      type: profile.firstName.type,
      position: profile.firstName.position,
      data: `${profile.firstName.data} ${profile.lastName.data ? `(${profile.lastName.data})` : ''}`
    },
    phone: profile.phone,
    email: profile.email,
    isMarried: profile.isMarried,
    children: profile.children,
    birthday: {
      ...profile.birthdayDate,
      data: convertDateTimeFullCrawler(profile.birthdayDate.data)
    },
    birthdayYearOld: {
      type: profile.birthdayYearOld.type,
      position: profile.birthdayYearOld.position,
      data: _.isEmpty(profile.birthdayYearOld.data) ? '' : `${profile.birthdayYearOld.data} ${i18next.t('candidateContainer.resume.age')}`
    },
    sex: profile.sex,
    residence: profile.residence,
    memo: profile.memo
  };
  return profileView;
}

function mappingProjectToView(project: IProject) {
  const projectView = {
    projectName: project.projectName,
    projectPeriod: {
      ...project.projectPeriod,
      data: convertPeriodDataFull(project.projectPeriod.data)
    },
    projectDetail: project.projectDetail
  };
  return projectView;
}

function mappingLaborityToView(labority: ILabority) {
  const laborityView = {
    laboratoryName: labority.laboratoryName,
    period: {
      ...labority.period,
      data: convertPeriodDataFull(labority.period.data)
    },
    details: labority.details
  };
  return laborityView;
}

function mappingActivityToView(activity: IActivity) {
  const activityView: IActivity = {
    activityName: activity.activityName,
    period: activity.period,
    details: activity.details
  };
  return activityView;
}

function mappingResumeInformationToView(resumeInformation: IResumeInformation) {
  const resumeInformationView: IResumeInformationView = {
    activities: resumeInformation.activities,
    awardHistories: resumeInformation.awardHistories,
    basicInformation: {
      introduction: resumeInformation.basicInformation.introduction,
      todo: resumeInformation.basicInformation.todo,
      language: resumeInformation.basicInformation.language,
      toeicScore: resumeInformation.basicInformation.toeicScore,
      toeflScore: resumeInformation.basicInformation.toeflScore,
      experienceStudyingAbroad: resumeInformation.basicInformation.experienceStudyingAbroad,
      experienceOverseasWork: resumeInformation.basicInformation.experienceOverseasWork,
      qualification: {
        type: resumeInformation.basicInformation.qualification.type,
        position: resumeInformation.basicInformation.qualification.position,
        data: handleBreakAndGroupData(resumeInformation.basicInformation.qualification.data)
      },
      numberOfManagement: resumeInformation.basicInformation.numberOfManagement,
      currentAnnualIncome: resumeInformation.basicInformation.currentAnnualIncome,
      privateComment: resumeInformation.basicInformation.privateComment,
      lastLoginDate: {
        ...resumeInformation.basicInformation.lastLoginDate,
        data: convertDateTimeFullCrawler(resumeInformation.basicInformation.lastLoginDate.data)
      },
      lastUpdateDate: {
        ...resumeInformation.basicInformation.lastUpdateDate,
        data: convertDateTimeFullCrawler(resumeInformation.basicInformation.lastUpdateDate.data)
      },
      registrationDate: {
        ...resumeInformation.basicInformation.registrationDate,
        data: convertDateTimeFullCrawler(resumeInformation.basicInformation.registrationDate.data)
      }
    },
    desiredCondition: resumeInformation.desiredCondition,
    educations: resumeInformation.educations,
    header: resumeInformation.header,
    laboratories: resumeInformation.laboratories,
    other: resumeInformation.other,
    portfolios: resumeInformation.portfolios,
    profile: mappingProfileToProfileView(resumeInformation.profile),
    projects: resumeInformation.projects,
    skills: resumeInformation.skills,
    writingHistories: resumeInformation.writingHistories,
    workHistoryExtended: resumeInformation.workHistoryExtended,
    companyHistories: resumeInformation.companyHistories,
    educationExtended: resumeInformation.educationExtended
  };
  return resumeInformationView;
}

function mappingEducationToView(education: IEducations) {
  const newEducation = {
    schoolName: education.schoolName,
    undergraduateDepartmentMajor: education.undergraduateDepartmentMajor,
    graduationDate: {
      ...education.graduationDate,
      data: convertYearMonthJapan(education.graduationDate.data)
    },
    lessonActivity: education.lessonActivity
  };
  return newEducation as IEducations;
}

function mappingResumeToView(resume: IResumeModel) {
  const resumeModelView: IResumeModeView = {
    id: resume.id,
    companyId: resume.companyId,
    jobSiteId: resume.jobSiteId,
    candidateId: resume.candidateId,
    information: !_.isEmpty(resume.information) ? mappingResumeInformationToView(resume.information) : null,
    attachments: resume.attachments
  };
  return resumeModelView;
}

function mappingDesiredConditionToView(desiredCondition: IDesiredCondition) {
  const desiredConditionView = {
    desiredWorkRegion: desiredCondition.desiredWorkRegion,
    overseasPreferredLocation: desiredCondition.overseasPreferredLocation,
    overseasPossibleRecruitment: desiredCondition.overseasPossibleRecruitment,
    desiredSalary: desiredCondition.desiredSalary,
    desiredIndustry: desiredCondition.desiredIndustry,
    desiredOccupation: desiredCondition.desiredOccupation,
    workingStyleInterested: desiredCondition.workingStyleInterested,
    conditionsSpecial: desiredCondition.conditionsSpecial,
    conditionsOther: desiredCondition.conditionsOther
  };

  return desiredConditionView;
}
function mappingAwardHistoryToView(awardHistory: IAwardHistory) {
  const awardHistoryView: IAwardHistory = {
    title: awardHistory.title,
    awardYear: {
      ...awardHistory.awardYear,
      data: convertDateTimeFullCrawler(awardHistory.awardYear.data)
    }
  };
  return awardHistoryView;
}

export {
  mappingProfileToProfileView,
  mappingResumeToView,
  mappingEducationToView,
  mappingDesiredConditionToView,
  mappingProjectToView,
  mappingLaborityToView,
  mappingActivityToView,
  mappingAwardHistoryToView
};
