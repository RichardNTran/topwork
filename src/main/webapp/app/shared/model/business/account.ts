interface IAccountInfo {
  companies?: ICompany[];
  length?: number;
  accessToken: string;
  id: string;
  fullName: string;
  companyId: string;
  email: string;
  avatar?: string;
  roles: IRole[];
}

interface IRole {
  id: string;
  name: string;
}

interface ICompany {
  name: string;
  description: string;
  email: string;
  address: string;
  id: string;
}

export { IAccountInfo, IRole, ICompany };
