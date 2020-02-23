enum JobOfferType {
  active = 'active',
  deactivate = 'deactivate'
}

enum JobSite {
  another = 'その他',
  green = 'Green',
  wantedly = 'Wantedly',
  careertrek = 'Careertrek',
  bizreach = 'BizReach'
}

enum JobStatusType {
  active = 0,
  archive = 1
}

interface IJobOfferDetail {
  id: string;
  name: string;
  url: string;
  occupationId: string;
  description?: string;
  salary: string;
  workingPlace: string;
  trialPeriod: string;
  status: number;
}

interface IJobOfferStatistics {
  id: string;
  activate: number;
  deactivate: number;
}

export { IJobOfferDetail, JobStatusType, IJobOfferStatistics, JobOfferType, JobSite };
