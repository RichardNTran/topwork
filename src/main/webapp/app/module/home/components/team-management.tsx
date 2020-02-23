import React, { Component } from 'react';
import i18next from 'app/shared/locales';
import { Link } from 'react-router-dom';
import { IMember } from 'app/shared/model';

interface IMemberContainerProps {
  members: IMember[];
}

class TeamManagementContainer extends Component<IMemberContainerProps> {
  renderListMembers() {
    const { members } = this.props;
    if (!members) return null;

    return (
      members &&
      members.map((member, index) => (
        <li key={index.toString()} className="list-group-item pd-x-0 d-flex">
          <span className="tx-medium mn-wd-45p pd-r-10 text-break">{(member || {}).fullName}</span>
          <span className="tx-rubik text-break">{(member.roles || [])[0].name}</span>
        </li>
      ))
    );
  }

  render() {
    return (
      <div className="card card-dashboard h-100">
        <div className="card-header">
          <h6 className="lh-5 mg-b-0">{i18next.t('homeContainer.teamManagement.title')}</h6>
        </div>
        <div className="card-body pd-x-0 pd-b-10">
          {/* <div className="pd-x-20 mg-b-25 text-center">
            <button type="button" className="btn btn-sm btn-uppercase btn-white flex-fill tx-spacing-1 oplbtn-primary mn-wd-170" disabled>
              {i18next.t('homeContainer.buttons.editMember')}
            </button>
          </div> */}
          <div className="pd-x-20">
            <ul className="list-group list-group-flush mg-b-0 tx-13">{this.renderListMembers()}</ul>
          </div>
        </div>
        {/* <div className="card-footer text-center tx-13">
          <Link to="#" className="link-03 disable">
            {i18next.t('homeContainer.teamManagement.viewAll')} <i className="opleicon-arrow-down mg-l-5" />
          </Link>
        </div> */}
      </div>
    );
  }
}

export { TeamManagementContainer };
