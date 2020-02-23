import React, { Component } from 'react';
import i18next from 'app/shared/locales';

import { connect } from 'react-redux';
import { FE_TOPWORK_URL } from 'app/config/constants';

class UserInfoContainer extends Component<StateProps> {
  render() {
    const { currentUser } = this.props;
    if (!currentUser) return null;
    const firstRole = (currentUser.roles || [])[0];
    const firstCompany = (currentUser.companies || [])[0];
    return (
      <div className="card card-dashboard">
        <div className="card-header">
          <h6 className="lh-5 mg-b-0">{i18next.t('homeContainer.accountInfo.title')}</h6>
        </div>
        <div className="card-body pd-x-0 pd-b-10">
          {/* <div className="pd-x-20 mg-b-25 text-center">
            <button type="button" className="btn btn-sm btn-uppercase btn-white flex-fill tx-spacing-1 oplbtn-primary mn-wd-170" disabled>
              {i18next.t('homeContainer.buttons.editAccount')}
            </button>
          </div> */}
          <div className="pd-x-20">
            <ul className="list-group list-group-flush mg-b-0 tx-13">
              <li className="list-group-item pd-x-0 d-flex">
                <span className="tx-medium mn-wd-45p pd-r-10 text-break text-break">
                  {i18next.t('homeContainer.accountInfo.companyName')}
                </span>
                <span className="tx-rubik text-break">{(firstCompany || {}).name}</span>
              </li>
              <li className="list-group-item pd-x-0 d-flex">
                <span className="tx-medium mn-wd-45p pd-r-10 text-break">{i18next.t('homeContainer.accountInfo.name')}</span>
                <span className="tx-rubik text-break">{(currentUser || {}).fullName}</span>
              </li>
              <li className="list-group-item pd-x-0 d-flex">
                <span className="tx-medium mn-wd-45p pd-r-10 text-break">{i18next.t('homeContainer.accountInfo.email')}</span>
                <span className="tx-rubik text-break">{(currentUser || {}).email}</span>
              </li>
              <li className="list-group-item pd-x-0 d-flex">
                <span className="tx-medium mn-wd-45p pd-r-10 text-break">{i18next.t('homeContainer.accountInfo.password')}</span>
                <span className="tx-rubik text-break">設定済</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => {
  const { authReducer } = storeState;
  const { error, currentUser } = authReducer;
  return { error, currentUser };
};

type StateProps = ReturnType<typeof mapStateToProps>;

const userInfoContainer = connect(
  mapStateToProps,
  {}
)(UserInfoContainer);

export { userInfoContainer as UserInfoContainer };
