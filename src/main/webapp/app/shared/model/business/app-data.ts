interface IJobsiteServer {
  domain?: string;
  id: string;
  logo: string;
  title?: string;
  entries: ISelectItemServer[];
  isInternal?: boolean;
}

interface ISelectItemServer {
  id: string;
  name: string;
  description: string;
  image?: string;
  priority?: number;
  isEntry?: boolean;
  type?: number;
  code?: string;
  nextSteps?: string[];
  selectionStatus?: string[];
  availableCurrentSteps?: string[];
}

interface ISelectUserItemServer {
  email: string;
  fullName: string;
  id: string;
  avatar?: string;
}

interface ISelectionStep {
  id: string;
  name: string;
}
interface ISelectInterview {
  id: string;
  label: string;
  value: string;
  startDate: string;
  endDate: string;
  place: string;
  selectionStep?: ISelectionStep;
  title: string;
}

export { IJobsiteServer, ISelectItemServer, ISelectUserItemServer, ISelectInterview };
