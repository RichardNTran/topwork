import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from 'app/config/history';
import { getCurrentUserInfo, logout } from 'app/redux/actions';
import { Dropdown, FontIcon } from 'app/shared/component';
import { CookieKey, topworkPlatformRoute } from 'app/shared/constant';
import { IDropdownItem, IAccountInfo } from 'app/shared/model';
import { FE_TOPWORK_URL } from 'app/config/constants';
import { CookiesStorage } from 'app/shared/utils';
import i18next from 'app/shared/locales';

interface IHeaderBarProps extends StateProps, DispatchProps {
  logoutAction: () => void;
}

interface IHeaderBarState {
  searchKey: string;
}

class HeaderBarContainer extends Component<IHeaderBarProps, IHeaderBarState> {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    };
  }

  handleLogoutToUserSever = () => {
    CookiesStorage.clearData();
    CookiesStorage.clearCookieData(CookieKey.deviceToken);
    CookiesStorage.clearCookieData(CookieKey.pastUrl);
    history.push(topworkPlatformRoute.Logout);
  };

  navigateToUserServer = () => {
    window.location.assign(FE_TOPWORK_URL);
  };

  updateInputValue = evt => {
    this.setState({
      searchKey: evt.target.value
    });
  };

  renderProfileDropdownHeader(currentUser: IAccountInfo) {
    if (!currentUser) return null;
    const firstRole = (currentUser.roles || [])[0];
    const firstCompany = (currentUser.companies || [])[0];
    return (
      <div className="header-dropdown">
        <ul className="info-content">
          <li className="item">
            <span className="tx-semibold">{(firstCompany || {}).name}</span>
          </li>
          <li className="item">
            <span className="tx-12 tx-color-03">{(firstRole || {}).name}</span>
          </li>
          <li className="item pd-t-10-f">{currentUser.fullName}</li>
        </ul>
      </div>
    );
  }

  render() {
    const settingItems: IDropdownItem[] = [
      {
        link: '#',
        icon: 'external-link',
        label: i18next.t('header.setting.external_service_link')
      },
      {
        link: '#',
        icon: 'list',
        label: i18next.t('header.setting.template_management')
      },
      {
        link: '#',
        icon: 'sidebar',
        label: i18next.t('header.setting.sidebar_management')
      }
    ];

    const profileItems: IDropdownItem[] = [
      // {
      //   link: userPlatformRoute.AccountInfo,
      //   icon: 'edit',
      //   label: 'アカウント情報'
      // },
      {
        selectAction: this.handleLogoutToUserSever,
        iconSmall: 'log-out',
        label: 'ログアウト'
      }
    ];

    const serviceItems: IDropdownItem[] = [
      {
        selectAction: this.navigateToUserServer,
        icon: 'airplay',
        label: 'Topwork User Platform'
      }
    ];
    const { currentUser } = this.props;
    return (
      <div className="content-header align-items-center justify-content-end">
        <div className="nav align-items-center justify-content-end">
          <Dropdown
            className="dropdown-profile dropdown-headerbar dropdown-setting mg-l-15 pd-t-6 pd-b-5"
            menuContainerClass="dropdown-menu-right tx-13-f"
            items={settingItems}
          >
            <FontIcon iconName="settings" className="icon-settings valign-middle icon-20" />
          </Dropdown>
          <Dropdown
            className="dropdown-profile dropdown-headerbar dropdown-inline dropdown-switchservices mg-l-15 pd-t-6 pd-b-5"
            menuContainerClass="dropdown-menu-right tx-13-f"
            items={serviceItems}
          >
            <FontIcon iconName="grid" className="icon-grid" />
          </Dropdown>
          <Dropdown
            renderHeader={() => this.renderProfileDropdownHeader(currentUser || {})}
            className="dropdown-profile dropdown-headerbar mg-l-15"
            menuContainerClass="dropdown-menu-right tx-13-f"
            items={profileItems}
          >
            <div className="avatar avatar-28">
              {currentUser && currentUser.avatar ? (
                <img src={(currentUser || {}).avatar} className="rounded-circle" alt="" />
              ) : (
                <span className="avatar-initial rounded-circle bg-skin-user">
                  {(currentUser || {}).fullName && currentUser.fullName.charAt(0)}
                </span>
              )}
            </div>
          </Dropdown>
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

const mapDispatchToProps = dispatch => ({
  getCurrentUserInfoAction: () => dispatch(getCurrentUserInfo()),
  logoutAction: () => dispatch(logout())
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const headerBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderBarContainer);

export { headerBarContainer as HeaderBarContainer };
