import { ITask } from 'app/shared/model';

function mappingCandidateListModel(response) {
  const candidates: ITask[] = [];

  response.forEach(item => {
    candidates.push(mappingCandidateModel(item));
  });

  return candidates;
}

function mappingCandidateModel(item) {
  let task: ITask;

  task = {
    candidate: {
      id: item.id,
      age: item.age,
      avatar: item.avatar,
      fullName: item.fullName,
      gender: item.gender,
      appliedDate: item.appliedDate
    },
    entryId: item.entryId,
    company: item.company || {},
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    isStar: item.task && item.task.isStar,
    jobOffer: item.jobOffer,
    jobSiteId: item.jobSiteId,
    occupationId: item.occupationId,
    id: item.task && item.task.id,
    selectedJobSite: item.task && item.task.selectedJobSite,
    selectionStatusId: item.task && item.task.selectionStatusId,
    selectionStepId: item.task && item.task.selectionStepId,
    snoozeTime: item.task && item.task.snoozeTime,
    status: item.task && item.task.status,
    user: item.user,
    interview: item.interview,
    furiganaName: item.furiganaName,
    birthday: item.birthday,
    isManually: item.isManually,
    attachments: item.attachments || {},
    age: item.age
  };

  return task;
}

export { mappingCandidateModel, mappingCandidateListModel };
